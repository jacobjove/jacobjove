import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitCreateManyRoutineInputEnvelope } from "../inputs/RoutineHabitCreateManyRoutineInputEnvelope";
import { RoutineHabitCreateOrConnectWithoutRoutineInput } from "../inputs/RoutineHabitCreateOrConnectWithoutRoutineInput";
import { RoutineHabitCreateWithoutRoutineInput } from "../inputs/RoutineHabitCreateWithoutRoutineInput";
import { RoutineHabitWhereUniqueInput } from "../inputs/RoutineHabitWhereUniqueInput";

@TypeGraphQL.InputType("RoutineHabitCreateNestedManyWithoutRoutineInput", {
  isAbstract: true,
})
export class RoutineHabitCreateNestedManyWithoutRoutineInput {
  @TypeGraphQL.Field(() => [RoutineHabitCreateWithoutRoutineInput], { nullable: true })
  create?: RoutineHabitCreateWithoutRoutineInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitCreateOrConnectWithoutRoutineInput], {
    nullable: true,
  })
  connectOrCreate?: RoutineHabitCreateOrConnectWithoutRoutineInput[] | undefined;

  @TypeGraphQL.Field(() => RoutineHabitCreateManyRoutineInputEnvelope, { nullable: true })
  createMany?: RoutineHabitCreateManyRoutineInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitWhereUniqueInput], { nullable: true })
  connect?: RoutineHabitWhereUniqueInput[] | undefined;
}
