import * as TypeGraphQL from "type-graphql";
import { DashboardWhereUniqueInput } from "../../../inputs/DashboardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDashboardArgs {
  @TypeGraphQL.Field((_type) => DashboardWhereUniqueInput, {
    nullable: false,
  })
  where!: DashboardWhereUniqueInput;
}
