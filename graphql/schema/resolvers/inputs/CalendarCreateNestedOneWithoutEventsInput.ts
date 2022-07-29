import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarCreateOrConnectWithoutEventsInput } from "../inputs/CalendarCreateOrConnectWithoutEventsInput";
import { CalendarCreateWithoutEventsInput } from "../inputs/CalendarCreateWithoutEventsInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarCreateNestedOneWithoutEventsInput", {
  isAbstract: true,
})
export class CalendarCreateNestedOneWithoutEventsInput {
  @TypeGraphQL.Field(() => CalendarCreateWithoutEventsInput, { nullable: true })
  create?: CalendarCreateWithoutEventsInput | undefined;

  @TypeGraphQL.Field(() => CalendarCreateOrConnectWithoutEventsInput, { nullable: true })
  connectOrCreate?: CalendarCreateOrConnectWithoutEventsInput | undefined;

  @TypeGraphQL.Field(() => CalendarWhereUniqueInput, { nullable: true })
  connect?: CalendarWhereUniqueInput | undefined;
}
