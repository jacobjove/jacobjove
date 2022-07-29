import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardNameUserIdCompoundUniqueInput } from "../inputs/DashboardNameUserIdCompoundUniqueInput";

@TypeGraphQL.InputType("DashboardWhereUniqueInput", {
  isAbstract: true,
})
export class DashboardWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => DashboardNameUserIdCompoundUniqueInput, { nullable: true })
  name_userId?: DashboardNameUserIdCompoundUniqueInput | undefined;
}
