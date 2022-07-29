import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("NotebookOwnerIdTitleCompoundUniqueInput", {
  isAbstract: true,
})
export class NotebookOwnerIdTitleCompoundUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  ownerId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  title!: string;
}
