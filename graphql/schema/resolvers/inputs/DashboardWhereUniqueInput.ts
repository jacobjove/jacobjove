import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardNameUserIdCompoundUniqueInput } from "../inputs/DashboardNameUserIdCompoundUniqueInput";

@TypeGraphQL.InputType("DashboardWhereUniqueInput", {
  isAbstract: true,
})
export class DashboardWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => DashboardNameUserIdCompoundUniqueInput, { nullable: true })
  name_userId?: DashboardNameUserIdCompoundUniqueInput | undefined;
}
