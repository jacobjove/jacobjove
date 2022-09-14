import CreationDialog from "@web/components/data/CreationDialog";
import { useCreateNotebook, useNotebookReducer } from "@web/generated/hooks/notebook.hooks";
import { bindPopover } from "material-ui-popup-state/hooks";
import { NotebookCreationInput } from "@web/graphql/generated/inputs/notebook.inputs";
import Notebook from "@web/generated/types/Notebook";
import { NotebookFragment } from "@web/graphql/generated/fragments/notebook.fragment";
import fields from "@web/graphql/generated/fields/notebook.fields";

export type NotebookCreationDialogProps = ReturnType<typeof bindPopover>;

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
