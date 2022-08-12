import CreationFields from "@/components/data/CreationFields";
import { TaskFragment } from "@/graphql/generated/fragments/task.fragment";
import { TaskCreationInput } from "@/graphql/generated/inputs/task.inputs";
import { Task } from "@/graphql/generated/models/task.model";

interface TaskCreationFieldsProps {
  dataTuple: [TaskCreationInput, Dispatch<Payload<TaskCreationInput>>];
}

export default function TaskCreationFields(props: TaskCreationFieldsProps) {
  return CreationFields<Task, TaskCreationInput, { createTask: TaskFragment }>({
    dataTuple: props.dataTuple,
    fields: [
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
        type: "DateTime",
        required: false,
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
        type: "ID",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "ID",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "ID",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "Number",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "DateTime",
        required: false,
      },
    ],
    ...props,
  });
}
