import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateWithoutTaskInput } from "../inputs/CalendarEventCreateWithoutTaskInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventCreateOrConnectWithoutTaskInput", {
  isAbstract: true,
})
export class CalendarEventCreateOrConnectWithoutTaskInput {
  @TypeGraphQL.Field((_type) => CalendarEventWhereUniqueInput, { nullable: false })
  where!: CalendarEventWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CalendarEventCreateWithoutTaskInput, { nullable: false })
  create!: CalendarEventCreateWithoutTaskInput;
}
