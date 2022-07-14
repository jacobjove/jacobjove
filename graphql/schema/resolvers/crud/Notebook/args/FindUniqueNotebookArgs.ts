import * as TypeGraphQL from "type-graphql";
import { NotebookWhereUniqueInput } from "../../../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueNotebookArgs {
  @TypeGraphQL.Field((_type) => NotebookWhereUniqueInput, {
    nullable: false,
  })
  where!: NotebookWhereUniqueInput;
}
