import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarUpdateInput } from "../../../inputs/CalendarUpdateInput";
import { CalendarWhereUniqueInput } from "../../../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCalendarArgs {
  @TypeGraphQL.Field(() => CalendarUpdateInput, { nullable: false })
  data!: CalendarUpdateInput;

  @TypeGraphQL.Field(() => CalendarWhereUniqueInput, { nullable: false })
  where!: CalendarWhereUniqueInput;
}
