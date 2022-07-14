import * as TypeGraphQL from "type-graphql";
import { NotebookCreateOrConnectWithoutNotesInput } from "../inputs/NotebookCreateOrConnectWithoutNotesInput";
import { NotebookCreateWithoutNotesInput } from "../inputs/NotebookCreateWithoutNotesInput";
import { NotebookWhereUniqueInput } from "../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.InputType("NotebookCreateNestedOneWithoutNotesInput", {
  isAbstract: true,
})
export class NotebookCreateNestedOneWithoutNotesInput {
  @TypeGraphQL.Field((_type) => NotebookCreateWithoutNotesInput, {
    nullable: true,
  })
  create?: NotebookCreateWithoutNotesInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookCreateOrConnectWithoutNotesInput, {
    nullable: true,
  })
  connectOrCreate?: NotebookCreateOrConnectWithoutNotesInput | undefined;

  @TypeGraphQL.Field((_type) => NotebookWhereUniqueInput, {
    nullable: true,
  })
  connect?: NotebookWhereUniqueInput | undefined;
}
