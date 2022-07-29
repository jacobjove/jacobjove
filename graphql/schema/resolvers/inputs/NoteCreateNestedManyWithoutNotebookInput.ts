import * as TypeGraphQL from "type-graphql-v2-fork";
import { NoteCreateManyNotebookInputEnvelope } from "../inputs/NoteCreateManyNotebookInputEnvelope";
import { NoteCreateOrConnectWithoutNotebookInput } from "../inputs/NoteCreateOrConnectWithoutNotebookInput";
import { NoteCreateWithoutNotebookInput } from "../inputs/NoteCreateWithoutNotebookInput";
import { NoteWhereUniqueInput } from "../inputs/NoteWhereUniqueInput";

@TypeGraphQL.InputType("NoteCreateNestedManyWithoutNotebookInput", {
  isAbstract: true,
})
export class NoteCreateNestedManyWithoutNotebookInput {
  @TypeGraphQL.Field((_type) => [NoteCreateWithoutNotebookInput], { nullable: true })
  create?: NoteCreateWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NoteCreateOrConnectWithoutNotebookInput], { nullable: true })
  connectOrCreate?: NoteCreateOrConnectWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field((_type) => NoteCreateManyNotebookInputEnvelope, { nullable: true })
  createMany?: NoteCreateManyNotebookInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [NoteWhereUniqueInput], { nullable: true })
  connect?: NoteWhereUniqueInput[] | undefined;
}
