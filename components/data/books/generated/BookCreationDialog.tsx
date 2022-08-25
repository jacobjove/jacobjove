import CreationDialog from "@/components/data/CreationDialog";
import fields from "@/graphql/generated/fields/book.fields";
import { BookFragment } from "@/graphql/generated/fragments/book.fragment";
import { useBookDataReducer, useCreateBook } from "@/graphql/generated/hooks/book.hooks";
import { BookCreationInput } from "@/graphql/generated/inputs/book.inputs";
import Book from "@/graphql/generated/types/Book";
import { bindPopover } from "material-ui-popup-state/hooks";

export type BookCreationDialogProps = ReturnType<typeof bindPopover>;

export default function BookCreationDialog(props: BookCreationDialogProps) {
  const [create] = useCreateBook();
  const dataTuple = useBookDataReducer();
  return CreationDialog<Book, BookCreationInput, { createBook: BookFragment }>({
    typeName: "book",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
