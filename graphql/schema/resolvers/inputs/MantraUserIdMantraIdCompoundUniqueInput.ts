import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("MantraUserIdMantraIdCompoundUniqueInput", {
  isAbstract: true,
})
export class MantraUserIdMantraIdCompoundUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  mantraId!: string;
}
