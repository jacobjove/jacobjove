import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookCreateInput } from "../../../inputs/NotebookCreateInput";
import { NotebookUpdateInput } from "../../../inputs/NotebookUpdateInput";
import { NotebookWhereUniqueInput } from "../../../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertNotebookArgs {
  @TypeGraphQL.Field(() => NotebookWhereUniqueInput, { nullable: false })
  where!: NotebookWhereUniqueInput;

  @TypeGraphQL.Field(() => NotebookCreateInput, { nullable: false })
  create!: NotebookCreateInput;

  @TypeGraphQL.Field(() => NotebookUpdateInput, { nullable: false })
  update!: NotebookUpdateInput;
}
