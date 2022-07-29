import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateOrConnectWithoutMilestonesInput } from "../inputs/GoalCreateOrConnectWithoutMilestonesInput";
import { GoalCreateWithoutMilestonesInput } from "../inputs/GoalCreateWithoutMilestonesInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalCreateNestedOneWithoutMilestonesInput", {
  isAbstract: true,
})
export class GoalCreateNestedOneWithoutMilestonesInput {
  @TypeGraphQL.Field((_type) => GoalCreateWithoutMilestonesInput, { nullable: true })
  create?: GoalCreateWithoutMilestonesInput | undefined;

  @TypeGraphQL.Field((_type) => GoalCreateOrConnectWithoutMilestonesInput, { nullable: true })
  connectOrCreate?: GoalCreateOrConnectWithoutMilestonesInput | undefined;

  @TypeGraphQL.Field((_type) => GoalWhereUniqueInput, { nullable: true })
  connect?: GoalWhereUniqueInput | undefined;
}
