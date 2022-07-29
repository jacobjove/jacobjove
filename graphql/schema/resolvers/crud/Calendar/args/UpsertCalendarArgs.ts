import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarCreateInput } from "../../../inputs/CalendarCreateInput";
import { CalendarUpdateInput } from "../../../inputs/CalendarUpdateInput";
import { CalendarWhereUniqueInput } from "../../../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCalendarArgs {
  @TypeGraphQL.Field((_type) => CalendarWhereUniqueInput, { nullable: false })
  where!: CalendarWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CalendarCreateInput, { nullable: false })
  create!: CalendarCreateInput;

  @TypeGraphQL.Field((_type) => CalendarUpdateInput, { nullable: false })
  update!: CalendarUpdateInput;
}
