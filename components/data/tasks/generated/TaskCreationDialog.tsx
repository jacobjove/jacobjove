import CreationDialog from "@/components/data/CreationDialog";
import fields from "@/graphql/generated/fields/task.fields";
import { TaskFragment } from "@/graphql/generated/fragments/task.fragment";
import { useCreateTask, useTaskReducer } from "@/graphql/generated/hooks/task.hooks";
import { TaskCreationInput } from "@/graphql/generated/inputs/task.inputs";
import Task from "@/graphql/generated/types/Task";
import { bindPopover } from "material-ui-popup-state/hooks";

export type TaskCreationDialogProps = ReturnType<typeof bindPopover>;

export default function TaskCreationDialog(props: TaskCreationDialogProps) {
  const [create] = useCreateTask();
  const dataTuple = useTaskReducer();
  return CreationDialog<Task, TaskCreationInput, { createTask: TaskFragment }>({
    typeName: "task",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
