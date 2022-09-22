import CreationDialog from "@web/components/data/CreationDialog";
import fields from "@web/generated/graphql/fields/dashboard.fields";
import { DashboardFragment } from "@web/generated/graphql/fragments/dashboard.fragment";
import { DashboardCreationInput } from "@web/generated/graphql/inputs/dashboard.inputs";
import Dashboard from "@web/generated/graphql/types/Dashboard";
import { useCreateDashboard, useDashboardReducer } from "@web/generated/hooks/dashboard.hooks";
import { bindDialog } from "material-ui-popup-state/hooks";

export interface DashboardCreationDialogProps extends ReturnType<typeof bindDialog> {
  close: () => void;
  children?: React.ReactNode;
}

export default function DashboardCreationDialog(props: DashboardCreationDialogProps) {
  const [create] = useCreateDashboard();
  const dataTuple = useDashboardReducer();
  return CreationDialog<Dashboard, DashboardCreationInput, { createDashboard: DashboardFragment }>({
    typeName: "dashboard",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
