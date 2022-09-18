import CreationDialog from "@web/components/data/CreationDialog";
import { useBookReducer, useCreateBook } from "@web/generated/hooks/book.hooks";
import fields from "@web/graphql/generated/fields/book.fields";
import { BookFragment } from "@web/graphql/generated/fragments/book.fragment";
import { BookCreationInput } from "@web/graphql/generated/inputs/book.inputs";
import Book from "@web/graphql/generated/types/Book";
import { bindPopover } from "material-ui-popup-state/hooks";

export type BookCreationDialogProps = ReturnType<typeof bindPopover>;

export default function BookCreationDialog(props: BookCreationDialogProps) {
  const [create] = useCreateBook();
  const dataTuple = useBookReducer();
  return CreationDialog<Book, BookCreationInput, { createBook: BookFragment }>({
    typeName: "book",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
