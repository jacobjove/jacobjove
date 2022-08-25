import CreationDialog from "@/components/data/CreationDialog";
import fields from "@/graphql/generated/fields/dashboard.fields";
import { DashboardFragment } from "@/graphql/generated/fragments/dashboard.fragment";
import {
  useCreateDashboard,
  useDashboardDataReducer,
} from "@/graphql/generated/hooks/dashboard.hooks";
import { DashboardCreationInput } from "@/graphql/generated/inputs/dashboard.inputs";
import Dashboard from "@/graphql/generated/types/Dashboard";
import { bindPopover } from "material-ui-popup-state/hooks";

export type DashboardCreationDialogProps = ReturnType<typeof bindPopover>;

export default function DashboardCreationDialog(props: DashboardCreationDialogProps) {
  const [create] = useCreateDashboard();
  const dataTuple = useDashboardDataReducer();
  return CreationDialog<Dashboard, DashboardCreationInput, { createDashboard: DashboardFragment }>({
    typeName: "dashboard",
    dataTuple,
    create,
    fields,
    // produceInitialData,
    ...props,
  });
}
