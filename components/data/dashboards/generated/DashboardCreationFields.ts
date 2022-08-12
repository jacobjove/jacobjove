import CreationFields from "@/components/data/CreationFields";
import { DashboardFragment } from "@/graphql/generated/fragments/dashboard.fragment";
import { DashboardCreationInput } from "@/graphql/generated/inputs/dashboard.inputs";
import { Dashboard } from "@/graphql/generated/models/dashboard.model";

interface DashboardCreationFieldsProps {
  dataTuple: [DashboardCreationInput, Dispatch<Payload<DashboardCreationInput>>];
}

export default function DashboardCreationFields(props: DashboardCreationFieldsProps) {
  return CreationFields<Dashboard, DashboardCreationInput, { createDashboard: DashboardFragment }>({
    dataTuple: props.dataTuple,
    fields: [
      {
        name: "",
        label: "",
        type: "ID",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "String",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "String",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "Map",
        required: true,
      },

      {
        name: "",
        label: "",
        type: "Boolean",
        required: false,
      },

      {
        name: "",
        label: "",
        type: "Boolean",
        required: false,
      },
    ],
    ...props,
  });
}
