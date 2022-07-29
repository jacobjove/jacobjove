import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarWhereUniqueInput } from "../../../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteCalendarArgs {
  @TypeGraphQL.Field(() => CalendarWhereUniqueInput, { nullable: false })
  where!: CalendarWhereUniqueInput;
}
