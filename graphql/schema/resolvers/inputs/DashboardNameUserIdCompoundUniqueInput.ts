import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("DashboardNameUserIdCompoundUniqueInput", {
  isAbstract: true,
})
export class DashboardNameUserIdCompoundUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string;
}
