import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookCreateWithoutNotesInput } from "../inputs/NotebookCreateWithoutNotesInput";
import { NotebookWhereUniqueInput } from "../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.InputType("NotebookCreateOrConnectWithoutNotesInput", {
  isAbstract: true,
})
export class NotebookCreateOrConnectWithoutNotesInput {
  @TypeGraphQL.Field(() => NotebookWhereUniqueInput, { nullable: false })
  where!: NotebookWhereUniqueInput;

  @TypeGraphQL.Field(() => NotebookCreateWithoutNotesInput, { nullable: false })
  create!: NotebookCreateWithoutNotesInput;
}
