import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateManyTaskInputEnvelope } from "../inputs/CalendarEventCreateManyTaskInputEnvelope";
import { CalendarEventCreateOrConnectWithoutTaskInput } from "../inputs/CalendarEventCreateOrConnectWithoutTaskInput";
import { CalendarEventCreateWithoutTaskInput } from "../inputs/CalendarEventCreateWithoutTaskInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventCreateNestedManyWithoutTaskInput", {
  isAbstract: true,
})
export class CalendarEventCreateNestedManyWithoutTaskInput {
  @TypeGraphQL.Field(() => [CalendarEventCreateWithoutTaskInput], { nullable: true })
  create?: CalendarEventCreateWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventCreateOrConnectWithoutTaskInput], { nullable: true })
  connectOrCreate?: CalendarEventCreateOrConnectWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(() => CalendarEventCreateManyTaskInputEnvelope, { nullable: true })
  createMany?: CalendarEventCreateManyTaskInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [CalendarEventWhereUniqueInput], { nullable: true })
  connect?: CalendarEventWhereUniqueInput[] | undefined;
}
