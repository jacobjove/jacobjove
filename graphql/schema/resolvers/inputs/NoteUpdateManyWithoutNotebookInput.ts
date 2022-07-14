import * as TypeGraphQL from "type-graphql";
import { NoteCreateManyNotebookInputEnvelope } from "../inputs/NoteCreateManyNotebookInputEnvelope";
import { NoteCreateOrConnectWithoutNotebookInput } from "../inputs/NoteCreateOrConnectWithoutNotebookInput";
import { NoteCreateWithoutNotebookInput } from "../inputs/NoteCreateWithoutNotebookInput";
import { NoteScalarWhereInput } from "../inputs/NoteScalarWhereInput";
import { NoteUpdateManyWithWhereWithoutNotebookInput } from "../inputs/NoteUpdateManyWithWhereWithoutNotebookInput";
import { NoteUpdateWithWhereUniqueWithoutNotebookInput } from "../inputs/NoteUpdateWithWhereUniqueWithoutNotebookInput";
import { NoteUpsertWithWhereUniqueWithoutNotebookInput } from "../inputs/NoteUpsertWithWhereUniqueWithoutNotebookInput";
import { NoteWhereUniqueInput } from "../inputs/NoteWhereUniqueInput";

@TypeGraphQL.InputType("NoteUpdateManyWithoutNotebookInput", {
  isAbstract: true,
})
export class NoteUpdateManyWithoutNotebookInput {
  @TypeGraphQL.Field((_type) => [NoteCreateWithoutNotebookInput], {
    nullable: true,
  })
  create?: NoteCreateWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NoteCreateOrConnectWithoutNotebookInput], {
    nullable: true,
  })
  connectOrCreate?: NoteCreateOrConnectWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NoteUpsertWithWhereUniqueWithoutNotebookInput], {
    nullable: true,
  })
  upsert?: NoteUpsertWithWhereUniqueWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field((_type) => NoteCreateManyNotebookInputEnvelope, {
    nullable: true,
  })
  createMany?: NoteCreateManyNotebookInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [NoteWhereUniqueInput], {
    nullable: true,
  })
  set?: NoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NoteWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: NoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NoteWhereUniqueInput], {
    nullable: true,
  })
  delete?: NoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NoteWhereUniqueInput], {
    nullable: true,
  })
  connect?: NoteWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NoteUpdateWithWhereUniqueWithoutNotebookInput], {
    nullable: true,
  })
  update?: NoteUpdateWithWhereUniqueWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NoteUpdateManyWithWhereWithoutNotebookInput], {
    nullable: true,
  })
  updateMany?: NoteUpdateManyWithWhereWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NoteScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: NoteScalarWhereInput[] | undefined;
}
