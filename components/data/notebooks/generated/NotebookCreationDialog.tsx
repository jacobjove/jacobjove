import CreationDialog from "@/components/data/CreationDialog";
import fields from "@/graphql/generated/fields/notebook.fields";
import { NotebookFragment } from "@/graphql/generated/fragments/notebook.fragment";
import {
  useCreateNotebook,
  useNotebookDataReducer,
} from "@/graphql/generated/hooks/notebook.hooks";
import { NotebookCreationInput } from "@/graphql/generated/inputs/notebook.inputs";
import { Notebook } from "@/graphql/generated/models/notebook.model";
import { getOptimisticResponseForNotebookCreation } from "@/graphql/generated/mutations/notebook.mutations";
import { bindPopover } from "material-ui-popup-state/hooks";

export type NotebookCreationDialogProps = ReturnType<typeof bindPopover>;

export default function NotebookCreationDialog(props: NotebookCreationDialogProps) {
  const [create] = useCreateNotebook();
  const dataTuple = useNotebookDataReducer();
  return CreationDialog<Notebook, NotebookCreationInput, { createNotebook: NotebookFragment }>({
    typeName: "notebook",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    getOptimisticResponse: getOptimisticResponseForNotebookCreation,
    ...props,
  });
}
