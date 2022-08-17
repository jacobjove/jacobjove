/* Do not edit this file. It was generated programmatically. */
// import { Dashboard } from "@/graphql/generated/models/dashboard.model";
import { UserFragment } from "@/graphql/generated/fragments/user.fragment";
import { DashboardCreationInput } from "@/graphql/generated/inputs/dashboard.inputs";
import { ID } from "@/graphql/schema/types";
import { Payload } from "@/utils/data";

export type DashboardData = Partial<DashboardCreationInput> & { id?: ID };
// export type DashboardData = InputData<Dashboard>;
// export type InitialDashboardData = InitialData<Dashboard, "rank" | "userId">;

export function initializeDashboardData(
  data: Partial<DashboardData>,
  user?: UserFragment | null | undefined
): Partial<DashboardData> {
  if (!user) return data;
  return {
    userId: user.id,
    name: "",
    ...Object.fromEntries(Object.entries(data).filter(([, value]) => value !== undefined)), // TODO: make this unnecessary
  };
}

export function dashboardDataReducer(state: DashboardData, payload: Payload<DashboardData>) {
  if (payload.field === "init")
    return initializeDashboardData(payload.value as Partial<DashboardData>);
  return { ...state, [payload.field]: payload.value };
}
