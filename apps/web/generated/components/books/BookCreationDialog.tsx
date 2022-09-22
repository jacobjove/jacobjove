import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/book.fields";
import { BookFragment } from "@web/generated/graphql/fragments/book.fragment";
import { BookCreationInput } from "@web/generated/graphql/inputs/book.inputs";
import Book from "@web/generated/graphql/types/Book";
import { useBookReducer, useCreateBook } from "@web/generated/hooks/book.hooks";
import { bindDialog } from "material-ui-popup-state/hooks";

export interface BookCreationDialogProps extends ReturnType<typeof bindDialog> {
  close: () => void;
  children?: React.ReactNode;
}

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
