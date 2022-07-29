import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("MantraUserIdMantraIdCompoundUniqueInput", {
  isAbstract: true,
})
export class MantraUserIdMantraIdCompoundUniqueInput {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  mantraId!: string;
}
