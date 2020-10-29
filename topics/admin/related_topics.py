from typing import Optional, TYPE_CHECKING

from django.contrib.admin import SimpleListFilter

from admin import GenericTabularInline
from modularhistory.constants import NO, YES
from topics.models import TopicRelation

if TYPE_CHECKING:
    from modularhistory.models import TaggableModel


class RelatedTopicsInline(GenericTabularInline):
    """
    A generic inline for related topics.

    Can be used by admins for models inheriting from modularhistory.models.TaggableModel.
    """

    model = TopicRelation
    autocomplete_fields = ['topic']

    def get_extra(
        self, request, model_instance: Optional['TaggableModel'] = None, **kwargs
    ) -> int:
        """Return the number of extra (blank) input rows to display."""
        if model_instance and model_instance.tags.count():
            return 0
        return 1


class HasTagsFilter(SimpleListFilter):
    """TODO: add docstring."""

    title = 'has tags'
    parameter_name = 'has_tags'

    def lookups(self, request, model_admin):
        """Return an iterable of tuples (value, verbose value)."""
        return (YES, YES), (NO, NO)

    def queryset(self, request, queryset):
        """Return the filtered queryset."""
        if self.value() == YES:
            return queryset.exclude(tags=None)
        if self.value() == NO:
            return queryset.filter(tags=None)
