from sources.models.source_with_page_numbers import SourceWithPageNumbers

TYPE_MAX_LENGTH: int = 10

PIECE_TYPES = (('essay', 'Essay'),)


class Piece(SourceWithPageNumbers):
    """A piece (e.g., essay)."""

    @property
    def __html__(self) -> str:
        """TODO: write docstring."""
        components = [
            self.attributee_string,
            f'"{self.linked_title}"',
            self.date.string if self.date else '',
        ]
        return self.components_to_html(components)


class Essay(Piece):
    """An essay (as a source)."""

    pass  # noqa: WPS604
