import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/notebook.fields";
import { NotebookFragment } from "@web/generated/graphql/fragments/notebook.fragment";
import { NotebookCreationInput } from "@web/generated/graphql/inputs/notebook.inputs";
import Notebook from "@web/generated/graphql/types/Notebook";
import { useCreateNotebook, useNotebookReducer } from "@web/generated/hooks/notebook.hooks";
import { bindDialog } from "material-ui-popup-state/hooks";

export interface NotebookCreationDialogProps extends ReturnType<typeof bindDialog> {
  close: () => void;
}

export default function NotebookCreationDialog(props: NotebookCreationDialogProps) {
  const [create] = useCreateNotebook();
  const dataTuple = useNotebookReducer();
  return CreationDialog<Notebook, NotebookCreationInput, { createNotebook: NotebookFragment }>({
    typeName: "notebook",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
