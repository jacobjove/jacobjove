import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookCreateOrConnectWithoutNotesInput } from "../inputs/NotebookCreateOrConnectWithoutNotesInput";
import { NotebookCreateWithoutNotesInput } from "../inputs/NotebookCreateWithoutNotesInput";
import { NotebookWhereUniqueInput } from "../inputs/NotebookWhereUniqueInput";

@TypeGraphQL.InputType("NotebookCreateNestedOneWithoutNotesInput", {
  isAbstract: true,
})
export class NotebookCreateNestedOneWithoutNotesInput {
  @TypeGraphQL.Field(() => NotebookCreateWithoutNotesInput, { nullable: true })
  create?: NotebookCreateWithoutNotesInput | undefined;

  @TypeGraphQL.Field(() => NotebookCreateOrConnectWithoutNotesInput, { nullable: true })
  connectOrCreate?: NotebookCreateOrConnectWithoutNotesInput | undefined;

  @TypeGraphQL.Field(() => NotebookWhereUniqueInput, { nullable: true })
  connect?: NotebookWhereUniqueInput | undefined;
}
