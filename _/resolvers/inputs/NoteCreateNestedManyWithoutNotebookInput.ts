import * as TypeGraphQL from "type-graphql-v2-fork";
import { NoteCreateManyNotebookInputEnvelope } from "../inputs/NoteCreateManyNotebookInputEnvelope";
import { NoteCreateOrConnectWithoutNotebookInput } from "../inputs/NoteCreateOrConnectWithoutNotebookInput";
import { NoteCreateWithoutNotebookInput } from "../inputs/NoteCreateWithoutNotebookInput";
import { NoteWhereUniqueInput } from "../inputs/NoteWhereUniqueInput";

@TypeGraphQL.InputType("NoteCreateNestedManyWithoutNotebookInput", { isAbstract: true })
export class NoteCreateNestedManyWithoutNotebookInput {
  @TypeGraphQL.Field(() => [NoteCreateWithoutNotebookInput], { nullable: true })
  create?: NoteCreateWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field(() => [NoteCreateOrConnectWithoutNotebookInput], { nullable: true })
  connectOrCreate?: NoteCreateOrConnectWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field(() => NoteCreateManyNotebookInputEnvelope, { nullable: true })
  createMany?: NoteCreateManyNotebookInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [NoteWhereUniqueInput], { nullable: true })
  connect?: NoteWhereUniqueInput[] | undefined;
}
