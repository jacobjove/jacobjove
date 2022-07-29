import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarCreateInput } from "../../../inputs/CalendarCreateInput";
import { CalendarUpdateInput } from "../../../inputs/CalendarUpdateInput";
import { CalendarWhereUniqueInput } from "../../../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCalendarArgs {
  @TypeGraphQL.Field(() => CalendarWhereUniqueInput, { nullable: false })
  where!: CalendarWhereUniqueInput;

  @TypeGraphQL.Field(() => CalendarCreateInput, { nullable: false })
  create!: CalendarCreateInput;

  @TypeGraphQL.Field(() => CalendarUpdateInput, { nullable: false })
  update!: CalendarUpdateInput;
}
