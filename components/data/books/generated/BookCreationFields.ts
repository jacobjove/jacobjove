import CreationFields from "@/components/data/CreationFields";
import { BookFragment } from "@/graphql/generated/fragments/book.fragment";
import { BookCreationInput } from "@/graphql/generated/inputs/book.inputs";
import { Book } from "@/graphql/generated/models/book.model";

interface BookCreationFieldsProps {
  dataTuple: [BookCreationInput, Dispatch<Payload<BookCreationInput>>];
}

export default function BookCreationFields(props: BookCreationFieldsProps) {
  return CreationFields<Book, BookCreationInput, { createBook: BookFragment }>({
    dataTuple: props.dataTuple,
    fields: [
      {
        name: "",
        label: "",
        type: "String",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "String",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "String",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "String",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "String",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "String[]",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "String[]",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "Number",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "Number",
        required: false,
      },
    ],
    ...props,
  });
}
