import * as TypeGraphQL from "type-graphql";
import { NotebookCreateWithoutNotesInput } from "../inputs/NotebookCreateWithoutNotesInput";
import { NotebookWhereUniqueInput } from "../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.InputType("NotebookCreateOrConnectWithoutNotesInput", {
  isAbstract: true,
})
export class NotebookCreateOrConnectWithoutNotesInput {
  @TypeGraphQL.Field((_type) => NotebookWhereUniqueInput, {
    nullable: false,
  })
  where!: NotebookWhereUniqueInput;

  @TypeGraphQL.Field((_type) => NotebookCreateWithoutNotesInput, {
    nullable: false,
  })
  create!: NotebookCreateWithoutNotesInput;
}
