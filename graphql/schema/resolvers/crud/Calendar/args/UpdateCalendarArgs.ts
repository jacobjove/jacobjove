import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarUpdateInput } from "../../../inputs/CalendarUpdateInput";
import { CalendarWhereUniqueInput } from "../../../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCalendarArgs {
  @TypeGraphQL.Field((_type) => CalendarUpdateInput, { nullable: false })
  data!: CalendarUpdateInput;

  @TypeGraphQL.Field((_type) => CalendarWhereUniqueInput, { nullable: false })
  where!: CalendarWhereUniqueInput;
}
