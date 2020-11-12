"""Serializers for the entities app."""

from modularhistory.models.searchable_model import SearchableModelSerializer
import serpy


class ImageSerializer(SearchableModelSerializer):
    """Serializer for images."""

    src_url = serpy.Field()
    width = serpy.IntField()
    height = serpy.IntField()
    caption_html = serpy.Field()
    provider_string = serpy.Field()

    def get_model(self, instance) -> str:  # noqa
        """Return the model name of the instance."""
        return 'images.image'
