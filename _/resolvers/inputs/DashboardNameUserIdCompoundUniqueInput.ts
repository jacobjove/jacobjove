import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("DashboardNameUserIdCompoundUniqueInput", { isAbstract: true })
export class DashboardNameUserIdCompoundUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;
}
