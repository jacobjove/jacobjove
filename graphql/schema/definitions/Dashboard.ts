import Definition, {
  OPTIONAL_BOOLEAN,
  OPTIONAL_STRING,
  REQUIRED_STRING,
} from "@/graphql/schema/definition";
import { Layout as LayoutItem } from "react-grid-layout";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];

export type CompleteDashboardLayouts = Record<
  "xxs" | "xs" | "sm" | "md" | "lg" | "xl",
  DashboardComponent[]
>;

export type DashboardLayouts = AtLeastOne<CompleteDashboardLayouts>;

export type DashboardComponentKey =
  | "calendar"
  | "identities"
  | "tasks"
  | "values"
  | "topics"
  | "routines";

// https://github.com/react-grid-layout/react-grid-layout#grid-item-props
export interface DashboardComponent extends LayoutItem {
  i: DashboardComponentKey;
}

const definition: Definition = {
  name: "dashboard",
  fields: {
    userId: { required: true, type: "ID", typeCast: "ObjectId" },
    name: REQUIRED_STRING,
    description: OPTIONAL_STRING,
    layouts: { required: true, type: "Map", typeCast: "JSON" },
    // archivedAt: { required: false, type: "DateTime", typeCast: "DateTime" },
    isDefault: OPTIONAL_BOOLEAN,
    public: OPTIONAL_BOOLEAN,
  },
};

export default definition;
