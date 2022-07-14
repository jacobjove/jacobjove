import * as TypeGraphQL from "type-graphql";
import { NotebookCreateInput } from "../../../inputs/NotebookCreateInput";
import { NotebookUpdateInput } from "../../../inputs/NotebookUpdateInput";
import { NotebookWhereUniqueInput } from "../../../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertNotebookArgs {
  @TypeGraphQL.Field((_type) => NotebookWhereUniqueInput, {
    nullable: false,
  })
  where!: NotebookWhereUniqueInput;

  @TypeGraphQL.Field((_type) => NotebookCreateInput, {
    nullable: false,
  })
  create!: NotebookCreateInput;

  @TypeGraphQL.Field((_type) => NotebookUpdateInput, {
    nullable: false,
  })
  update!: NotebookUpdateInput;
}
