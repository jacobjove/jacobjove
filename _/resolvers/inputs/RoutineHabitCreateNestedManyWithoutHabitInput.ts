import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitCreateManyHabitInputEnvelope } from "../inputs/RoutineHabitCreateManyHabitInputEnvelope";
import { RoutineHabitCreateOrConnectWithoutHabitInput } from "../inputs/RoutineHabitCreateOrConnectWithoutHabitInput";
import { RoutineHabitCreateWithoutHabitInput } from "../inputs/RoutineHabitCreateWithoutHabitInput";
import { RoutineHabitWhereUniqueInput } from "../inputs/RoutineHabitWhereUniqueInput";

@TypeGraphQL.InputType("RoutineHabitCreateNestedManyWithoutHabitInput", { isAbstract: true })
export class RoutineHabitCreateNestedManyWithoutHabitInput {
  @TypeGraphQL.Field(() => [RoutineHabitCreateWithoutHabitInput], { nullable: true })
  create?: RoutineHabitCreateWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitCreateOrConnectWithoutHabitInput], { nullable: true })
  connectOrCreate?: RoutineHabitCreateOrConnectWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => RoutineHabitCreateManyHabitInputEnvelope, { nullable: true })
  createMany?: RoutineHabitCreateManyHabitInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitWhereUniqueInput], { nullable: true })
  connect?: RoutineHabitWhereUniqueInput[] | undefined;
}
