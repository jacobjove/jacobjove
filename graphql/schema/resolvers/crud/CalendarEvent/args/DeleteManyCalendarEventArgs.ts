import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventWhereInput } from "../../../inputs/CalendarEventWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCalendarEventArgs {
  @TypeGraphQL.Field((_type) => CalendarEventWhereInput, { nullable: true })
  where?: CalendarEventWhereInput | undefined;
}
