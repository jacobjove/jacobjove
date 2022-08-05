import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateOrConnectWithoutMilestonesInput } from "../inputs/GoalCreateOrConnectWithoutMilestonesInput";
import { GoalCreateWithoutMilestonesInput } from "../inputs/GoalCreateWithoutMilestonesInput";
import { GoalUpdateWithoutMilestonesInput } from "../inputs/GoalUpdateWithoutMilestonesInput";
import { GoalUpsertWithoutMilestonesInput } from "../inputs/GoalUpsertWithoutMilestonesInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalUpdateOneWithoutMilestonesInput", { isAbstract: true })
export class GoalUpdateOneWithoutMilestonesInput {
  @TypeGraphQL.Field(() => GoalCreateWithoutMilestonesInput, { nullable: true })
  create?: GoalCreateWithoutMilestonesInput | undefined;

  @TypeGraphQL.Field(() => GoalCreateOrConnectWithoutMilestonesInput, { nullable: true })
  connectOrCreate?: GoalCreateOrConnectWithoutMilestonesInput | undefined;

  @TypeGraphQL.Field(() => GoalUpsertWithoutMilestonesInput, { nullable: true })
  upsert?: GoalUpsertWithoutMilestonesInput | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(() => GoalWhereUniqueInput, { nullable: true })
  connect?: GoalWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => GoalUpdateWithoutMilestonesInput, { nullable: true })
  update?: GoalUpdateWithoutMilestonesInput | undefined;
}
