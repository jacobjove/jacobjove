import * as TypeGraphQL from "type-graphql";
import { NotebookUpdateInput } from "../../../inputs/NotebookUpdateInput";
import { NotebookWhereUniqueInput } from "../../../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateNotebookArgs {
  @TypeGraphQL.Field((_type) => NotebookUpdateInput, {
    nullable: false,
  })
  data!: NotebookUpdateInput;

  @TypeGraphQL.Field((_type) => NotebookWhereUniqueInput, {
    nullable: false,
  })
  where!: NotebookWhereUniqueInput;
}
