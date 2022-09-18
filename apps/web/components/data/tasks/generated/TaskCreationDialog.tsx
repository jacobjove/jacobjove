import CreationDialog from "@web/components/data/CreationDialog";
import { useCreateTask, useTaskReducer } from "@web/generated/hooks/task.hooks";
import fields from "@web/graphql/generated/fields/task.fields";
import { TaskFragment } from "@web/graphql/generated/fragments/task.fragment";
import { TaskCreationInput } from "@web/graphql/generated/inputs/task.inputs";
import Task from "@web/graphql/generated/types/Task";
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
