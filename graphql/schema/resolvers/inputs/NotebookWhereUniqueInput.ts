import * as TypeGraphQL from "type-graphql";
import { NotebookOwnerIdTitleCompoundUniqueInput } from "../inputs/NotebookOwnerIdTitleCompoundUniqueInput";

@TypeGraphQL.InputType("NotebookWhereUniqueInput", {
  isAbstract: true,
})
export class NotebookWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => NotebookOwnerIdTitleCompoundUniqueInput, {
    nullable: true,
  })
  ownerId_title?: NotebookOwnerIdTitleCompoundUniqueInput | undefined;
}
