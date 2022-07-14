import * as TypeGraphQL from "type-graphql";
import { RoutineCreateWithoutHabitsInput } from "../inputs/RoutineCreateWithoutHabitsInput";
import { RoutineWhereUniqueInput } from "../inputs/RoutineWhereUniqueInput";

@TypeGraphQL.InputType("RoutineCreateOrConnectWithoutHabitsInput", {
  isAbstract: true,
})
export class RoutineCreateOrConnectWithoutHabitsInput {
  @TypeGraphQL.Field((_type) => RoutineWhereUniqueInput, {
    nullable: false,
  })
  where!: RoutineWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RoutineCreateWithoutHabitsInput, {
    nullable: false,
  })
  create!: RoutineCreateWithoutHabitsInput;
}
