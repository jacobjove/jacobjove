import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("DashboardNameUserIdCompoundUniqueInput", {
  isAbstract: true,
})
export class DashboardNameUserIdCompoundUniqueInput {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  userId!: string;
}
