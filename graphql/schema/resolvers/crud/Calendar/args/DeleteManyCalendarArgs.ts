import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarWhereInput } from "../../../inputs/CalendarWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCalendarArgs {
  @TypeGraphQL.Field(() => CalendarWhereInput, { nullable: true })
  where?: CalendarWhereInput | undefined;
}
