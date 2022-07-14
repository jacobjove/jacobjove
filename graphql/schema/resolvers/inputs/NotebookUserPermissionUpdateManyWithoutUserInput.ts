import * as TypeGraphQL from "type-graphql";
import { NotebookUserPermissionCreateManyUserInputEnvelope } from "../inputs/NotebookUserPermissionCreateManyUserInputEnvelope";
import { NotebookUserPermissionCreateOrConnectWithoutUserInput } from "../inputs/NotebookUserPermissionCreateOrConnectWithoutUserInput";
import { NotebookUserPermissionCreateWithoutUserInput } from "../inputs/NotebookUserPermissionCreateWithoutUserInput";
import { NotebookUserPermissionScalarWhereInput } from "../inputs/NotebookUserPermissionScalarWhereInput";
import { NotebookUserPermissionUpdateManyWithWhereWithoutUserInput } from "../inputs/NotebookUserPermissionUpdateManyWithWhereWithoutUserInput";
import { NotebookUserPermissionUpdateWithWhereUniqueWithoutUserInput } from "../inputs/NotebookUserPermissionUpdateWithWhereUniqueWithoutUserInput";
import { NotebookUserPermissionUpsertWithWhereUniqueWithoutUserInput } from "../inputs/NotebookUserPermissionUpsertWithWhereUniqueWithoutUserInput";
import { NotebookUserPermissionWhereUniqueInput } from "../inputs/NotebookUserPermissionWhereUniqueInput";

@TypeGraphQL.InputType("NotebookUserPermissionUpdateManyWithoutUserInput", {
  isAbstract: true,
})
export class NotebookUserPermissionUpdateManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [NotebookUserPermissionCreateWithoutUserInput], {
    nullable: true,
  })
  create?: NotebookUserPermissionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: NotebookUserPermissionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  upsert?: NotebookUserPermissionUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: NotebookUserPermissionCreateManyUserInputEnvelope | undefined;

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

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  update?: NotebookUserPermissionUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  updateMany?: NotebookUserPermissionUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [NotebookUserPermissionScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: NotebookUserPermissionScalarWhereInput[] | undefined;
}
