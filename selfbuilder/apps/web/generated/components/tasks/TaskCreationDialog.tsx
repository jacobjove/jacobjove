import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/task.fields";
import { TaskFragment } from "@web/generated/graphql/fragments/task.fragment";
import { TaskCreationInput } from "@web/generated/graphql/inputs/task.inputs";
import { useCreateTask, useTaskReducer } from "@web/generated/hooks/task.hooks";
import { bindDialog } from "material-ui-popup-state/hooks";

export interface TaskCreationDialogProps extends ReturnType<typeof bindDialog> {
  close: () => void;
  children?: React.ReactNode;
}

export default function TaskCreationDialog(props: TaskCreationDialogProps) {
  const [create] = useCreateTask();
  const dataTuple = useTaskReducer();
  return CreationDialog<TaskFragment, TaskCreationInput, { createTask: TaskFragment }>({
    typeName: "task",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
