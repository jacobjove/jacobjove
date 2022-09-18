/* Edit this file to add a non-default post-save hook for the Calendar type. */

import { Calendar } from "@web/generated/interfaces/Calendar";
import CalendarModel from "@web/generated/models/Calendar";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

function create() {
  return CalendarModel.create<Calendar>({} as Calendar);
}
type Instance = Awaited<ReturnType<typeof create>>;

export const postCreate = async (calendar: Instance) => {
  return _postCreate(calendar);
};
