"""Model classes for sources."""

import re
from typing import List, Optional, TYPE_CHECKING, Union

from django.core.exceptions import ObjectDoesNotExist, ValidationError
from django.db import models
from django.utils.html import format_html
from django.utils.safestring import SafeString
from gm2m import GM2MField as GenericManyToManyField
from typedmodels.models import TypedModel

from modularhistory.constants import EMPTY_STRING
from modularhistory.fields import HTMLField, HistoricDateTimeField, JSONField
from modularhistory.models import (
    DatedModel,
    ModelWithRelatedEntities,
    SearchableModel,
    retrieve_or_compute,
)
from modularhistory.structures.historic_datetime import HistoricDateTime
from modularhistory.utils.html import NEW_TAB, components_to_html, compose_link, soupify
from modularhistory.utils.string import fix_comma_positions
from sources.manager import SourceManager
from sources.models.source_file import SourceFile

if TYPE_CHECKING:
    from entities.models import Entity
    from sources.models.source_containment import SourceContainment

# group 1: source pk
# group 2: ignore (entire appendage including HTML and closing curly brackets)
# group 3: source HTML
# group 4: closing brackets
ADMIN_PLACEHOLDER_REGEX = r'<<\ ?source:\ ?([\w\d-]+?)(:\ ?(?!>>)([\s\S]+?))?(\ ?>>)'

MAX_DB_STRING_LENGTH: int = 500
MAX_URL_LENGTH: int = 100
MAX_CREATOR_STRING_LENGTH: int = 100
MAX_TITLE_LENGTH: int = 250

COMPONENT_DELIMITER = ', '

SOURCE_TYPES = (('P', 'Primary'), ('S', 'Secondary'), ('T', 'Tertiary'))

CITATION_PHRASE_OPTIONS = (
    (None, EMPTY_STRING),
    ('quoted in', 'quoted in'),
    ('cited in', 'cited in'),
)


class Source(TypedModel, DatedModel, SearchableModel, ModelWithRelatedEntities):
    """A source for quotes or historical information."""

    full_string = models.CharField(
        verbose_name='database string',
        max_length=MAX_DB_STRING_LENGTH,
        null=False,
        blank=True,
        unique=True,
    )
    title = models.CharField(max_length=MAX_TITLE_LENGTH, null=True, blank=True)
    attributees = models.ManyToManyField(
        'entities.Entity',
        through='SourceAttribution',
        related_name='attributed_sources',
        blank=True,  # Some sources may not have attributees.
    )
    url = models.URLField(
        max_length=MAX_URL_LENGTH,
        null=True,
        blank=True,
        help_text='URL where the source can be accessed online',
    )
    description = HTMLField(null=True, blank=True)
    date = HistoricDateTimeField(null=True, blank=True)
    publication_date = HistoricDateTimeField(null=True, blank=True)
    location = models.ForeignKey(
        'places.Place', null=True, blank=True, on_delete=models.SET_NULL
    )
    db_file = models.ForeignKey(
        SourceFile,
        related_name='sources',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        verbose_name='file',
    )
    creators = models.CharField(
        max_length=MAX_CREATOR_STRING_LENGTH, null=True, blank=True
    )

    containers = models.ManyToManyField(
        'self',
        through='sources.SourceContainment',
        through_fields=('source', 'container'),
        # related_name='contained_sources',
        symmetrical=False,
        blank=True,
    )
    related = GenericManyToManyField(
        'quotes.Quote',
        'occurrences.Occurrence',
        through='sources.Citation',
        related_name='sources',
        blank=True,
    )

    # TODO: forbid access by non-document sources
    # TODO: make many to many
    collection = models.ForeignKey(
        'sources.Collection',
        related_name='documents',
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
    )

    # TODO: forbid access by non-document sources
    publication = models.ForeignKey(
        'sources.Publication', null=True, blank=True, on_delete=models.CASCADE
    )

    extra = JSONField(null=True, blank=True, default=dict)

    class FieldNames(SearchableModel.FieldNames):
        file = 'db_file'
        string = 'full_string'
        description = 'description'
        location = 'location'
        title = 'title'
        url = 'url'

    searchable_fields = [FieldNames.string, FieldNames.description]
    admin_placeholder_regex = re.compile(ADMIN_PLACEHOLDER_REGEX)
    objects: SourceManager = SourceManager()

    class Meta:
        ordering = ['creators', '-date']

    def __str__(self):
        """Returns the source's string representation."""
        return soupify(self.html).get_text()  # type: ignore

    @property
    def admin_source_link(self) -> SafeString:
        """Returns a file link to display in the admin."""
        element = EMPTY_STRING
        if self.source_file:
            element = compose_link(
                '<i class="fa fa-search"></i>',
                href=self.href,
                klass='btn btn-small btn-default display-source',
                target=NEW_TAB,
            )
        return format_html(element)

    @property
    def attributee_string(self) -> Optional[str]:
        """Returns a string representing the source's attributees."""
        if self.creators:
            return self.creators
        # Check for pk to avoid RecursionErrors with not-yet-saved objects
        elif not self.pk or not self.attributees.exists():
            return None
        attributees = self.ordered_attributees
        n_attributions = len(attributees)
        first_attributee = attributees[0]
        string = str(first_attributee)
        if n_attributions == 2:
            string = f'{string} and {attributees[1]}'
        elif n_attributions == 3:
            string = f'{string}, {attributees[1]}, and {attributees[2]}'
        elif n_attributions > 3:
            string = f'{string} et al.'
        return string

    @property
    def container(self) -> Optional['Source']:
        """Returns the source's primary container, if it has one."""
        try:
            return self.containment.container
        except (ObjectDoesNotExist, AttributeError):
            return None

    @property
    def containment(self) -> Optional['SourceContainment']:
        """Returns the source's primary containment."""
        try:
            return self.source_containments.first()
        except (ObjectDoesNotExist, AttributeError):
            return None

    @property
    def source_file(self) -> Optional[SourceFile]:
        """Returns the source's file, if it has one."""
        if self.db_file:
            return self.db_file
        # TODO: save container file as source file?
        return self.container.db_file if self.container else None

    @source_file.setter
    def source_file(self, value):
        """Setter for source_file."""
        self.db_file = value

    @property
    def source_file_url(self) -> Optional[str]:
        """Returns the source file's URL, if it has one."""
        return self.source_file.url if self.source_file else None

    def get_container_strings(self) -> Optional[List[str]]:
        """Return a list of strings representing the source's containers."""
        containments = self.source_containments.order_by('position')[:2]
        container_strings = []
        same_creator = True
        for containment in containments:
            container_html = f'{containment.container.html}'

            # Determine whether the container has the same attributee
            if containment.container.attributee_string != self.attributee_string:
                same_creator = False

            # Remove redundant creator string if necessary
            creator_string_is_duplicated = (
                all(
                    [
                        same_creator,
                        self.attributee_string,
                    ]
                )
                and self.attributee_string in container_html
            )
            if creator_string_is_duplicated:
                container_html = container_html[len(f'{self.attributee_string}, ') :]

            # Include the page number
            if containment.page_number:
                page_number_html = _get_page_number_html(
                    containment.source,
                    containment.source.source_file,
                    containment.page_number,
                    containment.end_page_number,
                )
                container_html = f'{container_html}, {page_number_html}'
            container_html = (
                f'{containment.phrase} in {container_html}'
                if containment.phrase
                else f'in {container_html}'
            )
            container_strings.append(container_html)
        return container_strings

    @property  # type: ignore
    @retrieve_or_compute(attribute_name='href')
    def href(self) -> Optional[str]:
        """
        Returns the href to use when providing a link to the source.

        If the source has a file, the URL of the file is returned;
        otherwise, the source's `url` field value is returned.
        """
        if self.source_file_url:
            url = self.source_file_url
            page_number = self.source_file.default_page_number
            if hasattr(self, 'page_number') and getattr(self, 'page_number', None):
                page_number = self.page_number + self.source_file.page_offset
            if page_number:
                url = _set_page_number(url, page_number)
        else:
            url = self.url
        return url

    @retrieve_or_compute(attribute_name='html', caster=format_html)
    def html(self) -> SafeString:
        """
        Return the HTML representation of the source, including its containers.

        This method is accessible as a property.
        """
        # TODO: html methods should be split into different classes and/or mixins.
        html = self.computations.get('html')
        if html:
            return format_html(html)
        html = self.__html__
        container_strings = self.get_container_strings()
        if container_strings:
            containers = ', and '.join(container_strings)
            html = f'{html}, {containers}'
        elif getattr(self, 'page_number', None):
            page_number_html = _get_page_number_html(
                self, self.source_file, self.page_number, self.end_page_number
            )
            html = f'{html}, {page_number_html}'
        if not self.source_file:
            if self.url and self.link not in html:
                html = f'{html}, retrieved from {self.link}'
        if getattr(self, 'information_url', None) and self.information_url:
            html = (
                f'{html}, information available at '
                f'{compose_link(self.information_url, href=self.information_url, target="_blank")}'
            )
        # TODO: Remove search icon; insert link intelligently
        # if self.file_url:
        #     html += (
        #         f'<a href="{self.file_url}" class="mx-1 display-source"'
        #         f' data-toggle="modal" data-target="#modal">'
        #         f'<i class="fas fa-search"></i>'
        #         f'</a>'
        #     )
        # elif self.url:
        #     link = self.url
        #     if self.page_number and 'www.sacred-texts.com' in link:
        #         link = f'{link}#page_{self.page_number}'
        #     html += (
        #         f'<a href="{link}" class="mx-1" target="_blank">'
        #         f'<i class="fas fa-search"></i>'
        #         f'</a>'
        #     )
        return format_html(fix_comma_positions(html))

    html.admin_order_field = FieldNames.string
    html: SafeString = property(html)  # type: ignore

    @property
    def link(self) -> Optional[SafeString]:
        """Returns an HTML link element containing the source URL, if one exists."""
        if self.url:
            return format_html(f'<a target="_blank" href="{self.url}">{self.url}</a>')
        return None

    @property
    def ordered_attributees(self) -> Optional[List['Entity']]:
        """Returns an ordered list of the source's attributees."""
        try:
            attributions = self.attributions.select_related('attributee')
            return [attribution.attributee for attribution in attributions]
        except (AttributeError, ObjectDoesNotExist):
            return None

    @property
    def string(self) -> str:
        """Returns the source's string representation, including its containers."""
        return soupify(self.html).get_text()  # type: ignore

    @property
    def linked_title(self) -> Optional[SafeString]:
        """Returns the source's title as a link."""
        if not self.title:
            return None
        html = (
            compose_link(
                self.title,
                href=self.href,
                klass='source-title display-source',
                target=NEW_TAB,
            )
            if self.href
            else self.title
        )
        return format_html(html)

    def clean(self):
        """Prepares the source to be saved."""
        super().clean()
        if self.pk:  # If this source is not being newly created
            if (
                Source.objects.exclude(pk=self.pk)
                .filter(full_string=self.full_string)
                .exists()
            ):
                raise ValidationError(
                    f'Unable to save this source because it duplicates an existing source '
                    f'or has an identical string: {self.full_string}'
                )
            for container in self.containers.all():
                if self in container.containers.all():
                    raise ValidationError(
                        f'This source cannot be contained by {container}, '
                        f'because that source is already contained by this source.'
                    )

    @staticmethod
    def components_to_html(components: List[str]):
        """Combine a list of HTML components into an HTML string."""
        return components_to_html(components, delimiter=COMPONENT_DELIMITER)

    def get_date(self) -> Optional[HistoricDateTime]:
        """Get the source's date."""  # TODO: prefetch container?
        if self.date:
            return self.date
        elif self.container and self.container.date:
            return self.container.date
        return None

    def save(self, *args, **kwargs):
        """Saves the source."""
        self.clean()
        super().save(*args, **kwargs)

    @property
    def __html__(self) -> str:
        """
        Return the source's HTML representation, not including its containers.

        Must be defined by models inheriting from Source.
        """
        raise NotImplementedError

    @classmethod
    def get_updated_placeholder(cls, match: re.Match) -> str:
        """Return an up-to-date placeholder for a source included in an HTML field."""
        placeholder = match.group(0)
        appendage = match.group(2)
        updated_appendage = f': {cls.get_object_html(match)}'
        if appendage:
            updated_placeholder = placeholder.replace(appendage, updated_appendage)
        else:
            updated_placeholder = (
                f'{placeholder.replace(" >>", "").replace(">>", "")}'
                f'{updated_appendage} >>'
            )
        return updated_placeholder


def _get_page_number_url(
    source: Source, file: SourceFile, page_number: int
) -> Optional[str]:
    """TODO: write docstring."""
    url = source.source_file_url or None
    if not url:
        return None
    page_number += file.page_offset
    return _set_page_number(url, page_number)


def _get_page_number_link(url: str, page_number: int) -> Optional[str]:
    """TODO: write docstring."""
    if not url:
        return None
    return compose_link(page_number, href=url, klass='display-source', target=NEW_TAB)


def _get_page_number_html(
    source: Source,
    file: SourceFile,
    page_number: int,
    end_page_number: Optional[int] = None,
) -> str:
    """TODO: write docstring."""
    pn_url = _get_page_number_url(source=source, file=file, page_number=page_number)
    pn = _get_page_number_link(url=pn_url, page_number=page_number) or page_number
    if end_page_number:
        end_pn_url = _get_page_number_url(
            source=source, file=file, page_number=end_page_number
        )
        end_pn = (
            _get_page_number_link(url=end_pn_url, page_number=end_page_number)
            or end_page_number
        )
        return f'pp. {pn}–{end_pn}'
    return f'p. {pn}'


def _set_page_number(url: str, page_number: Union[str, int]) -> str:
    page_param = 'page'
    if f'{page_param}=' in url:
        url = re.sub(rf'{page_param}=\d+', f'{page_param}={page_number}', url)
    else:
        url = f'{url}#{page_param}={page_number}'
    return url
