import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarWhereUniqueInput } from "../../../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCalendarArgs {
  @TypeGraphQL.Field((_type) => CalendarWhereUniqueInput, { nullable: false })
  where!: CalendarWhereUniqueInput;
}
