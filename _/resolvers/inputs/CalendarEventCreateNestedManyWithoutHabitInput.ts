import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateManyHabitInputEnvelope } from "../inputs/CalendarEventCreateManyHabitInputEnvelope";
import { CalendarEventCreateOrConnectWithoutHabitInput } from "../inputs/CalendarEventCreateOrConnectWithoutHabitInput";
import { CalendarEventCreateWithoutHabitInput } from "../inputs/CalendarEventCreateWithoutHabitInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventCreateNestedManyWithoutHabitInput", { isAbstract: true })
export class CalendarEventCreateNestedManyWithoutHabitInput {
  @TypeGraphQL.Field(() => [CalendarEventCreateWithoutHabitInput], { nullable: true })
  create?: CalendarEventCreateWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventCreateOrConnectWithoutHabitInput], { nullable: true })
  connectOrCreate?: CalendarEventCreateOrConnectWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => CalendarEventCreateManyHabitInputEnvelope, { nullable: true })
  createMany?: CalendarEventCreateManyHabitInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [CalendarEventWhereUniqueInput], { nullable: true })
  connect?: CalendarEventWhereUniqueInput[] | undefined;
}
