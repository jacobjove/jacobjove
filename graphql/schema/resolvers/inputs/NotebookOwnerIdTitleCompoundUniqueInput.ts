import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("NotebookOwnerIdTitleCompoundUniqueInput", {
  isAbstract: true,
})
export class NotebookOwnerIdTitleCompoundUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  ownerId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  title!: string;
}
