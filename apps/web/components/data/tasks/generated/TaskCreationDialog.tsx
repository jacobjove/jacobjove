import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/task.fields";
import { TaskFragment } from "@web/generated/graphql/fragments/task.fragment";
import { TaskCreationInput } from "@web/generated/graphql/inputs/task.inputs";
import Task from "@web/generated/graphql/types/Task";
import { useCreateTask, useTaskReducer } from "@web/generated/hooks/task.hooks";
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
