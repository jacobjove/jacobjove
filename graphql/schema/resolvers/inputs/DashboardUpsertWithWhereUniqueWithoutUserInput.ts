import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardCreateWithoutUserInput } from "../inputs/DashboardCreateWithoutUserInput";
import { DashboardUpdateWithoutUserInput } from "../inputs/DashboardUpdateWithoutUserInput";
import { DashboardWhereUniqueInput } from "../inputs/DashboardWhereUniqueInput";

@TypeGraphQL.InputType("DashboardUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class DashboardUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(() => DashboardWhereUniqueInput, { nullable: false })
  where!: DashboardWhereUniqueInput;

  @TypeGraphQL.Field(() => DashboardUpdateWithoutUserInput, { nullable: false })
  update!: DashboardUpdateWithoutUserInput;

  @TypeGraphQL.Field(() => DashboardCreateWithoutUserInput, { nullable: false })
  create!: DashboardCreateWithoutUserInput;
}
