import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookWhereUniqueInput } from "../../../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueNotebookArgs {
  @TypeGraphQL.Field((_type) => NotebookWhereUniqueInput, { nullable: false })
  where!: NotebookWhereUniqueInput;
}
