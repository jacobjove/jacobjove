import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateOrConnectWithoutActionsInput } from "../inputs/HabitCreateOrConnectWithoutActionsInput";
import { HabitCreateWithoutActionsInput } from "../inputs/HabitCreateWithoutActionsInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateNestedOneWithoutActionsInput", {
  isAbstract: true,
})
export class HabitCreateNestedOneWithoutActionsInput {
  @TypeGraphQL.Field(() => HabitCreateWithoutActionsInput, { nullable: true })
  create?: HabitCreateWithoutActionsInput | undefined;

  @TypeGraphQL.Field(() => HabitCreateOrConnectWithoutActionsInput, { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutActionsInput | undefined;

  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: true })
  connect?: HabitWhereUniqueInput | undefined;
}
