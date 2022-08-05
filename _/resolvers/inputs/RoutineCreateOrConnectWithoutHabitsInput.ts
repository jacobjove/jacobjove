import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineCreateWithoutHabitsInput } from "../inputs/RoutineCreateWithoutHabitsInput";
import { RoutineWhereUniqueInput } from "../inputs/RoutineWhereUniqueInput";

@TypeGraphQL.InputType("RoutineCreateOrConnectWithoutHabitsInput", { isAbstract: true })
export class RoutineCreateOrConnectWithoutHabitsInput {
  @TypeGraphQL.Field(() => RoutineWhereUniqueInput, { nullable: false })
  where!: RoutineWhereUniqueInput;

  @TypeGraphQL.Field(() => RoutineCreateWithoutHabitsInput, { nullable: false })
  create!: RoutineCreateWithoutHabitsInput;
}
