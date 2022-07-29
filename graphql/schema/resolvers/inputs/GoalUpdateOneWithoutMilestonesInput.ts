import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateOrConnectWithoutMilestonesInput } from "../inputs/GoalCreateOrConnectWithoutMilestonesInput";
import { GoalCreateWithoutMilestonesInput } from "../inputs/GoalCreateWithoutMilestonesInput";
import { GoalUpdateWithoutMilestonesInput } from "../inputs/GoalUpdateWithoutMilestonesInput";
import { GoalUpsertWithoutMilestonesInput } from "../inputs/GoalUpsertWithoutMilestonesInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalUpdateOneWithoutMilestonesInput", {
  isAbstract: true,
})
export class GoalUpdateOneWithoutMilestonesInput {
  @TypeGraphQL.Field((_type) => GoalCreateWithoutMilestonesInput, { nullable: true })
  create?: GoalCreateWithoutMilestonesInput | undefined;

  @TypeGraphQL.Field((_type) => GoalCreateOrConnectWithoutMilestonesInput, { nullable: true })
  connectOrCreate?: GoalCreateOrConnectWithoutMilestonesInput | undefined;

  @TypeGraphQL.Field((_type) => GoalUpsertWithoutMilestonesInput, { nullable: true })
  upsert?: GoalUpsertWithoutMilestonesInput | undefined;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @TypeGraphQL.Field((_type) => GoalWhereUniqueInput, { nullable: true })
  connect?: GoalWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => GoalUpdateWithoutMilestonesInput, { nullable: true })
  update?: GoalUpdateWithoutMilestonesInput | undefined;
}
