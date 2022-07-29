import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitCreateManyHabitInputEnvelope } from "../inputs/RoutineHabitCreateManyHabitInputEnvelope";
import { RoutineHabitCreateOrConnectWithoutHabitInput } from "../inputs/RoutineHabitCreateOrConnectWithoutHabitInput";
import { RoutineHabitCreateWithoutHabitInput } from "../inputs/RoutineHabitCreateWithoutHabitInput";
import { RoutineHabitWhereUniqueInput } from "../inputs/RoutineHabitWhereUniqueInput";

@TypeGraphQL.InputType("RoutineHabitCreateNestedManyWithoutHabitInput", {
  isAbstract: true,
})
export class RoutineHabitCreateNestedManyWithoutHabitInput {
  @TypeGraphQL.Field((_type) => [RoutineHabitCreateWithoutHabitInput], { nullable: true })
  create?: RoutineHabitCreateWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitCreateOrConnectWithoutHabitInput], { nullable: true })
  connectOrCreate?: RoutineHabitCreateOrConnectWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => RoutineHabitCreateManyHabitInputEnvelope, { nullable: true })
  createMany?: RoutineHabitCreateManyHabitInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitWhereUniqueInput], { nullable: true })
  connect?: RoutineHabitWhereUniqueInput[] | undefined;
}
