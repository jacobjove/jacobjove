import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardCreateManyUserInputEnvelope } from "../inputs/DashboardCreateManyUserInputEnvelope";
import { DashboardCreateOrConnectWithoutUserInput } from "../inputs/DashboardCreateOrConnectWithoutUserInput";
import { DashboardCreateWithoutUserInput } from "../inputs/DashboardCreateWithoutUserInput";
import { DashboardWhereUniqueInput } from "../inputs/DashboardWhereUniqueInput";

@TypeGraphQL.InputType("DashboardCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class DashboardCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(() => [DashboardCreateWithoutUserInput], { nullable: true })
  create?: DashboardCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [DashboardCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: DashboardCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => DashboardCreateManyUserInputEnvelope, { nullable: true })
  createMany?: DashboardCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [DashboardWhereUniqueInput], { nullable: true })
  connect?: DashboardWhereUniqueInput[] | undefined;
}
