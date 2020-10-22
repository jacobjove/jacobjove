"""Model classes for articles."""

from typing import List

from modularhistory.constants import EMPTY_STRING
from modularhistory.fields import ExtraField
from sources.models.piece import SourceWithPageNumbers

JSON_FIELD_NAME = 'extra'


class Article(SourceWithPageNumbers):
    """A published article (as a source)."""

    # Moved to base class
    # publication = ForeignKey(
    #     'sources.Publication',
    #     null=True,
    #     blank=True,
    #     on_delete=CASCADE
    # )

    # JSON fields
    # number = jsonstore.PositiveSmallIntegerField(
    #     null=True,
    #     blank=True,
    #     json_field_name=JSON_FIELD_NAME
    # )

    number = ExtraField(json_field_name=JSON_FIELD_NAME)

    # volume = jsonstore.PositiveSmallIntegerField(
    #     null=True,
    #     blank=True,
    #     json_field_name=JSON_FIELD_NAME
    # )

    volume = ExtraField(json_field_name=JSON_FIELD_NAME)

    searchable_fields = ['full_string', 'publication__name']

    @property
    def __html__(self) -> str:
        """
        Return the article's HTML string representation.

        The string has the following form:
            ... TODO
        """
        attributee_html = self.attributee_string
        title = self.linked_title.replace('"', "'") if self.title else EMPTY_STRING
        publication_html = (
            self.publication.html if self.publication else EMPTY_STRING
        )  # TODO: make required
        volume = f'vol. {self.volume}' if self.volume else EMPTY_STRING
        number = f'no. {self.number}' if self.number else EMPTY_STRING
        date = self.date.string if self.date else EMPTY_STRING
        components: List[str] = [
            attributee_html,
            f'"{title}"' if title else EMPTY_STRING,
            publication_html,
            volume,
            number,
            date,
        ]
        return self.components_to_html(components)
