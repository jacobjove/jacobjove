from admin import ModelAdmin, StackedInline, TabularInline, admin_site
from topics import models


class FactEntitiesInline(TabularInline):
    """Inline admin for a fact's related entities."""

    model = models.Fact.related_entities.through
    extra = 1


# class FactTopicsInline(TabularInline):
#     model = models.Fact.related_topics.through
#     extra = 1


class OccurrencesInline(TabularInline):
    """Inline admin for a fact's related occurences."""

    model = models.Fact.related_occurrences.through
    extra = 1


class SupportedFactsInline(StackedInline):
    """Inline admin for a fact's supported facts."""

    model = models.FactSupport
    fk_name = 'supported_fact'
    extra = 1


class SupportiveFactsInline(StackedInline):
    """Inline admin for a fact's supportive facts."""

    model = models.FactSupport
    fk_name = 'supportive_fact'
    extra = 1


class FactAdmin(ModelAdmin):
    """Admin for facts."""

    list_display = ['text']
    list_filter = ['related_entities', 'related_occurrences']
    search_fields = ['text']
    # ordering = ['datetime', 'start_date', 'end_date']

    inlines = [
        FactEntitiesInline,
        # FactTopicsInline,
        OccurrencesInline,
        SupportedFactsInline,
        SupportiveFactsInline,
    ]


admin_site.register(models.Fact, FactAdmin)
