import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardUpdateWithoutUserInput } from "../inputs/DashboardUpdateWithoutUserInput";
import { DashboardWhereUniqueInput } from "../inputs/DashboardWhereUniqueInput";

@TypeGraphQL.InputType("DashboardUpdateWithWhereUniqueWithoutUserInput", { isAbstract: true })
export class DashboardUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(() => DashboardWhereUniqueInput, { nullable: false })
  where!: DashboardWhereUniqueInput;

  @TypeGraphQL.Field(() => DashboardUpdateWithoutUserInput, { nullable: false })
  data!: DashboardUpdateWithoutUserInput;
}
