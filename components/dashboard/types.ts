import { Layout as LayoutItem } from "react-grid-layout";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];

export interface CompleteDashboardLayouts {
  xxs: DashboardComponent[];
  xs: DashboardComponent[];
  sm: DashboardComponent[];
  md: DashboardComponent[];
  lg: DashboardComponent[];
  xl: DashboardComponent[];
}

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
