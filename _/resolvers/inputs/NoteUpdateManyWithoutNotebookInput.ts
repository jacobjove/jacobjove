import * as TypeGraphQL from "type-graphql-v2-fork";
import { NoteCreateManyNotebookInputEnvelope } from "../inputs/NoteCreateManyNotebookInputEnvelope";
import { NoteCreateOrConnectWithoutNotebookInput } from "../inputs/NoteCreateOrConnectWithoutNotebookInput";
import { NoteCreateWithoutNotebookInput } from "../inputs/NoteCreateWithoutNotebookInput";
import { NoteScalarWhereInput } from "../inputs/NoteScalarWhereInput";
import { NoteUpdateManyWithWhereWithoutNotebookInput } from "../inputs/NoteUpdateManyWithWhereWithoutNotebookInput";
import { NoteUpdateWithWhereUniqueWithoutNotebookInput } from "../inputs/NoteUpdateWithWhereUniqueWithoutNotebookInput";
import { NoteUpsertWithWhereUniqueWithoutNotebookInput } from "../inputs/NoteUpsertWithWhereUniqueWithoutNotebookInput";
import { NoteWhereUniqueInput } from "../inputs/NoteWhereUniqueInput";

@TypeGraphQL.InputType("NoteUpdateManyWithoutNotebookInput", { isAbstract: true })
export class NoteUpdateManyWithoutNotebookInput {
  @TypeGraphQL.Field(() => [NoteCreateWithoutNotebookInput], { nullable: true })
  create?: NoteCreateWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field(() => [NoteCreateOrConnectWithoutNotebookInput], { nullable: true })
  connectOrCreate?: NoteCreateOrConnectWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field(() => [NoteUpsertWithWhereUniqueWithoutNotebookInput], { nullable: true })
  upsert?: NoteUpsertWithWhereUniqueWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field(() => NoteCreateManyNotebookInputEnvelope, { nullable: true })
  createMany?: NoteCreateManyNotebookInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [NoteWhereUniqueInput], { nullable: true })
  set?: NoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [NoteWhereUniqueInput], { nullable: true })
  disconnect?: NoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [NoteWhereUniqueInput], { nullable: true })
  delete?: NoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [NoteWhereUniqueInput], { nullable: true })
  connect?: NoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [NoteUpdateWithWhereUniqueWithoutNotebookInput], { nullable: true })
  update?: NoteUpdateWithWhereUniqueWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field(() => [NoteUpdateManyWithWhereWithoutNotebookInput], { nullable: true })
  updateMany?: NoteUpdateManyWithWhereWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field(() => [NoteScalarWhereInput], { nullable: true })
  deleteMany?: NoteScalarWhereInput[] | undefined;
}
