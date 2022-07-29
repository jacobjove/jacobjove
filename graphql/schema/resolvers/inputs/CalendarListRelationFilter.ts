import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarWhereInput } from "../inputs/CalendarWhereInput";

@TypeGraphQL.InputType("CalendarListRelationFilter", {
  isAbstract: true,
})
export class CalendarListRelationFilter {
  @TypeGraphQL.Field((_type) => CalendarWhereInput, { nullable: true })
  every?: CalendarWhereInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarWhereInput, { nullable: true })
  some?: CalendarWhereInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarWhereInput, { nullable: true })
  none?: CalendarWhereInput | undefined;
}
