import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookOwnerIdTitleCompoundUniqueInput } from "../inputs/NotebookOwnerIdTitleCompoundUniqueInput";

@TypeGraphQL.InputType("NotebookWhereUniqueInput", { isAbstract: true })
export class NotebookWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => NotebookOwnerIdTitleCompoundUniqueInput, { nullable: true })
  ownerId_title?: NotebookOwnerIdTitleCompoundUniqueInput | undefined;
}
