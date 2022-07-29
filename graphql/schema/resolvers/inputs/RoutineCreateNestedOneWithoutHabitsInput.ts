import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineCreateOrConnectWithoutHabitsInput } from "../inputs/RoutineCreateOrConnectWithoutHabitsInput";
import { RoutineCreateWithoutHabitsInput } from "../inputs/RoutineCreateWithoutHabitsInput";
import { RoutineWhereUniqueInput } from "../inputs/RoutineWhereUniqueInput";

@TypeGraphQL.InputType("RoutineCreateNestedOneWithoutHabitsInput", {
  isAbstract: true,
})
export class RoutineCreateNestedOneWithoutHabitsInput {
  @TypeGraphQL.Field((_type) => RoutineCreateWithoutHabitsInput, { nullable: true })
  create?: RoutineCreateWithoutHabitsInput | undefined;

  @TypeGraphQL.Field((_type) => RoutineCreateOrConnectWithoutHabitsInput, { nullable: true })
  connectOrCreate?: RoutineCreateOrConnectWithoutHabitsInput | undefined;

  @TypeGraphQL.Field((_type) => RoutineWhereUniqueInput, { nullable: true })
  connect?: RoutineWhereUniqueInput | undefined;
}
