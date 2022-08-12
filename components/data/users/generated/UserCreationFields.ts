import CreationFields from "@/components/data/CreationFields";
import { UserFragment } from "@/graphql/generated/fragments/user.fragment";
import { UserCreationInput } from "@/graphql/generated/inputs/user.inputs";
import { User } from "@/graphql/generated/models/user.model";

interface UserCreationFieldsProps {
  dataTuple: [UserCreationInput, Dispatch<Payload<UserCreationInput>>];
}

export default function UserCreationFields(props: UserCreationFieldsProps) {
  return CreationFields<User, UserCreationInput, { createUser: UserFragment }>({
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
        required: true,
      },

      {
        name: "",
        label: "",
        type: "Boolean",
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
        type: "Boolean",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "UserSettings",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "DateTime",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "Account[]",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "Calendar[]",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "CalendarEvent[]",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "Goal[]",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "Habit[]",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "Mantra[]",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "Notebook[]",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "Task[]",
        required: false,
      },
    ],
    ...props,
  });
}
