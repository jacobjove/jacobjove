import * as TypeGraphQL from "type-graphql";
import { CalendarEventWhereInput } from "../inputs/CalendarEventWhereInput";

@TypeGraphQL.InputType("CalendarEventListRelationFilter", {
  isAbstract: true,
})
export class CalendarEventListRelationFilter {
  @TypeGraphQL.Field((_type) => CalendarEventWhereInput, {
    nullable: true,
  })
  every?: CalendarEventWhereInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventWhereInput, {
    nullable: true,
  })
  some?: CalendarEventWhereInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventWhereInput, {
    nullable: true,
  })
  none?: CalendarEventWhereInput | undefined;
}
