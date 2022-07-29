import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardWhereUniqueInput } from "../../../inputs/DashboardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDashboardArgs {
  @TypeGraphQL.Field(() => DashboardWhereUniqueInput, { nullable: false })
  where!: DashboardWhereUniqueInput;
}
