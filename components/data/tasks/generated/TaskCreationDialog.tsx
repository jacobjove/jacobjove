import CreationDialog from "@/components/data/CreationDialog";
import fields from "@/graphql/generated/fields/task.fields";
import { TaskFragment } from "@/graphql/generated/fragments/task.fragment";
import { useCreateTask, useTaskDataReducer } from "@/graphql/generated/hooks/task.hooks";
import { TaskCreationInput } from "@/graphql/generated/inputs/task.inputs";
import { Task } from "@/graphql/generated/models/task.model";
import { getOptimisticResponseForTaskCreation } from "@/graphql/generated/mutations/task.mutations";
import { bindPopover } from "material-ui-popup-state/hooks";

export type TaskCreationDialogProps = ReturnType<typeof bindPopover>;

export default function TaskCreationDialog(props: TaskCreationDialogProps) {
  const [create] = useCreateTask();
  const dataTuple = useTaskDataReducer();
  return CreationDialog<Task, TaskCreationInput, { createTask: TaskFragment }>({
    typeName: "task",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    getOptimisticResponse: getOptimisticResponseForTaskCreation,
    ...props,
  });
}
