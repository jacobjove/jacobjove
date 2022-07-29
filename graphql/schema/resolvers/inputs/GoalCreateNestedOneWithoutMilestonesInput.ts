import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateOrConnectWithoutMilestonesInput } from "../inputs/GoalCreateOrConnectWithoutMilestonesInput";
import { GoalCreateWithoutMilestonesInput } from "../inputs/GoalCreateWithoutMilestonesInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalCreateNestedOneWithoutMilestonesInput", {
  isAbstract: true,
})
export class GoalCreateNestedOneWithoutMilestonesInput {
  @TypeGraphQL.Field(() => GoalCreateWithoutMilestonesInput, { nullable: true })
  create?: GoalCreateWithoutMilestonesInput | undefined;

  @TypeGraphQL.Field(() => GoalCreateOrConnectWithoutMilestonesInput, { nullable: true })
  connectOrCreate?: GoalCreateOrConnectWithoutMilestonesInput | undefined;

  @TypeGraphQL.Field(() => GoalWhereUniqueInput, { nullable: true })
  connect?: GoalWhereUniqueInput | undefined;
}
