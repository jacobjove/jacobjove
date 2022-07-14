import * as TypeGraphQL from "type-graphql";
import { NotebookUserPermissionCreateManyNotebookInputEnvelope } from "../inputs/NotebookUserPermissionCreateManyNotebookInputEnvelope";
import { NotebookUserPermissionCreateOrConnectWithoutNotebookInput } from "../inputs/NotebookUserPermissionCreateOrConnectWithoutNotebookInput";
import { NotebookUserPermissionCreateWithoutNotebookInput } from "../inputs/NotebookUserPermissionCreateWithoutNotebookInput";
import { NotebookUserPermissionScalarWhereInput } from "../inputs/NotebookUserPermissionScalarWhereInput";
import { NotebookUserPermissionUpdateManyWithWhereWithoutNotebookInput } from "../inputs/NotebookUserPermissionUpdateManyWithWhereWithoutNotebookInput";
import { NotebookUserPermissionUpdateWithWhereUniqueWithoutNotebookInput } from "../inputs/NotebookUserPermissionUpdateWithWhereUniqueWithoutNotebookInput";
import { NotebookUserPermissionUpsertWithWhereUniqueWithoutNotebookInput } from "../inputs/NotebookUserPermissionUpsertWithWhereUniqueWithoutNotebookInput";
import { NotebookUserPermissionWhereUniqueInput } from "../inputs/NotebookUserPermissionWhereUniqueInput";

@TypeGraphQL.InputType("NotebookUserPermissionUpdateManyWithoutNotebookInput", {
  isAbstract: true,
})
export class NotebookUserPermissionUpdateManyWithoutNotebookInput {
  @TypeGraphQL.Field((_type) => [NotebookUserPermissionCreateWithoutNotebookInput], {
    nullable: true,
  })
  create?: NotebookUserPermissionCreateWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionCreateOrConnectWithoutNotebookInput], {
    nullable: true,
  })
  connectOrCreate?: NotebookUserPermissionCreateOrConnectWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionUpsertWithWhereUniqueWithoutNotebookInput], {
    nullable: true,
  })
  upsert?: NotebookUserPermissionUpsertWithWhereUniqueWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionCreateManyNotebookInputEnvelope, {
    nullable: true,
  })
  createMany?: NotebookUserPermissionCreateManyNotebookInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionWhereUniqueInput], {
    nullable: true,
  })
  set?: NotebookUserPermissionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: NotebookUserPermissionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionWhereUniqueInput], {
    nullable: true,
  })
  delete?: NotebookUserPermissionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionWhereUniqueInput], {
    nullable: true,
  })
  connect?: NotebookUserPermissionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionUpdateWithWhereUniqueWithoutNotebookInput], {
    nullable: true,
  })
  update?: NotebookUserPermissionUpdateWithWhereUniqueWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionUpdateManyWithWhereWithoutNotebookInput], {
    nullable: true,
  })
  updateMany?: NotebookUserPermissionUpdateManyWithWhereWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: NotebookUserPermissionScalarWhereInput[] | undefined;
}
