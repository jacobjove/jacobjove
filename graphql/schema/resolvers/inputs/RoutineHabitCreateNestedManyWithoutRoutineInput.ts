import * as TypeGraphQL from "type-graphql";
import { RoutineHabitCreateManyRoutineInputEnvelope } from "../inputs/RoutineHabitCreateManyRoutineInputEnvelope";
import { RoutineHabitCreateOrConnectWithoutRoutineInput } from "../inputs/RoutineHabitCreateOrConnectWithoutRoutineInput";
import { RoutineHabitCreateWithoutRoutineInput } from "../inputs/RoutineHabitCreateWithoutRoutineInput";
import { RoutineHabitWhereUniqueInput } from "../inputs/RoutineHabitWhereUniqueInput";

@TypeGraphQL.InputType("RoutineHabitCreateNestedManyWithoutRoutineInput", {
  isAbstract: true,
})
export class RoutineHabitCreateNestedManyWithoutRoutineInput {
  @TypeGraphQL.Field((_type) => [RoutineHabitCreateWithoutRoutineInput], {
    nullable: true,
  })
  create?: RoutineHabitCreateWithoutRoutineInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitCreateOrConnectWithoutRoutineInput], {
    nullable: true,
  })
  connectOrCreate?: RoutineHabitCreateOrConnectWithoutRoutineInput[] | undefined;

  @TypeGraphQL.Field((_type) => RoutineHabitCreateManyRoutineInputEnvelope, {
    nullable: true,
  })
  createMany?: RoutineHabitCreateManyRoutineInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitWhereUniqueInput], {
    nullable: true,
  })
  connect?: RoutineHabitWhereUniqueInput[] | undefined;
}
