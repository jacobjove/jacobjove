import * as TypeGraphQL from "type-graphql";
import { DashboardUpdateWithoutUserInput } from "../inputs/DashboardUpdateWithoutUserInput";
import { DashboardWhereUniqueInput } from "../inputs/DashboardWhereUniqueInput";

@TypeGraphQL.InputType("DashboardUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class DashboardUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => DashboardWhereUniqueInput, {
    nullable: false,
  })
  where!: DashboardWhereUniqueInput;

  @TypeGraphQL.Field((_type) => DashboardUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: DashboardUpdateWithoutUserInput;
}
