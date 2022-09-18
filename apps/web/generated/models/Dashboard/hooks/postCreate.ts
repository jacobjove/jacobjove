/* Edit this file to add a non-default post-save hook for the Dashboard type. */

import { Dashboard } from "@web/generated/interfaces/Dashboard";
import DashboardModel from "@web/generated/models/Dashboard";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

function create() {
  return DashboardModel.create<Dashboard>({} as Dashboard);
}
type Instance = Awaited<ReturnType<typeof create>>;

export const postCreate = async (dashboard: Instance) => {
  return _postCreate(dashboard);
};
