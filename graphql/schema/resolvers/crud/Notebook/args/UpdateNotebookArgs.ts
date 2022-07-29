import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUpdateInput } from "../../../inputs/NotebookUpdateInput";
import { NotebookWhereUniqueInput } from "../../../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateNotebookArgs {
  @TypeGraphQL.Field(() => NotebookUpdateInput, { nullable: false })
  data!: NotebookUpdateInput;

  @TypeGraphQL.Field(() => NotebookWhereUniqueInput, { nullable: false })
  where!: NotebookWhereUniqueInput;
}
