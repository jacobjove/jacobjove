/* Edit this file to add a non-default post-save hook for the Calendar type. */

import { Calendar } from "@web/generated/interfaces/Calendar";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

export const postCreate = async (calendar: Calendar) => {
  return _postCreate(calendar);
};
