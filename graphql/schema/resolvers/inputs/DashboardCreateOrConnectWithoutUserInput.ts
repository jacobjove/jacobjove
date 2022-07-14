import * as TypeGraphQL from "type-graphql";
import { DashboardCreateWithoutUserInput } from "../inputs/DashboardCreateWithoutUserInput";
import { DashboardWhereUniqueInput } from "../inputs/DashboardWhereUniqueInput";

@TypeGraphQL.InputType("DashboardCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class DashboardCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field((_type) => DashboardWhereUniqueInput, {
    nullable: false,
  })
  where!: DashboardWhereUniqueInput;

  @TypeGraphQL.Field((_type) => DashboardCreateWithoutUserInput, {
    nullable: false,
  })
  create!: DashboardCreateWithoutUserInput;
}
