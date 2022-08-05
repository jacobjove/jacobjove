import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventWhereInput } from "../inputs/CalendarEventWhereInput";

@TypeGraphQL.InputType("CalendarEventListRelationFilter", { isAbstract: true })
export class CalendarEventListRelationFilter {
  @TypeGraphQL.Field(() => CalendarEventWhereInput, { nullable: true })
  every?: CalendarEventWhereInput | undefined;

  @TypeGraphQL.Field(() => CalendarEventWhereInput, { nullable: true })
  some?: CalendarEventWhereInput | undefined;

  @TypeGraphQL.Field(() => CalendarEventWhereInput, { nullable: true })
  none?: CalendarEventWhereInput | undefined;
}
