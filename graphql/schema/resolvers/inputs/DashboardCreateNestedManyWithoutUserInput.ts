import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardCreateManyUserInputEnvelope } from "../inputs/DashboardCreateManyUserInputEnvelope";
import { DashboardCreateOrConnectWithoutUserInput } from "../inputs/DashboardCreateOrConnectWithoutUserInput";
import { DashboardCreateWithoutUserInput } from "../inputs/DashboardCreateWithoutUserInput";
import { DashboardWhereUniqueInput } from "../inputs/DashboardWhereUniqueInput";

@TypeGraphQL.InputType("DashboardCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class DashboardCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [DashboardCreateWithoutUserInput], { nullable: true })
  create?: DashboardCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [DashboardCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: DashboardCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => DashboardCreateManyUserInputEnvelope, { nullable: true })
  createMany?: DashboardCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [DashboardWhereUniqueInput], { nullable: true })
  connect?: DashboardWhereUniqueInput[] | undefined;
}
