import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionCreateManyNotebookInputEnvelope } from "../inputs/NotebookUserPermissionCreateManyNotebookInputEnvelope";
import { NotebookUserPermissionCreateOrConnectWithoutNotebookInput } from "../inputs/NotebookUserPermissionCreateOrConnectWithoutNotebookInput";
import { NotebookUserPermissionCreateWithoutNotebookInput } from "../inputs/NotebookUserPermissionCreateWithoutNotebookInput";
import { NotebookUserPermissionScalarWhereInput } from "../inputs/NotebookUserPermissionScalarWhereInput";
import { NotebookUserPermissionUpdateManyWithWhereWithoutNotebookInput } from "../inputs/NotebookUserPermissionUpdateManyWithWhereWithoutNotebookInput";
import { NotebookUserPermissionUpdateWithWhereUniqueWithoutNotebookInput } from "../inputs/NotebookUserPermissionUpdateWithWhereUniqueWithoutNotebookInput";
import { NotebookUserPermissionUpsertWithWhereUniqueWithoutNotebookInput } from "../inputs/NotebookUserPermissionUpsertWithWhereUniqueWithoutNotebookInput";
import { NotebookUserPermissionWhereUniqueInput } from "../inputs/NotebookUserPermissionWhereUniqueInput";

@TypeGraphQL.InputType("NotebookUserPermissionUpdateManyWithoutNotebookInput", { isAbstract: true })
export class NotebookUserPermissionUpdateManyWithoutNotebookInput {
  @TypeGraphQL.Field(() => [NotebookUserPermissionCreateWithoutNotebookInput], {
    nullable: true,
  })
  create?: NotebookUserPermissionCreateWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionCreateOrConnectWithoutNotebookInput], {
    nullable: true,
  })
  connectOrCreate?: NotebookUserPermissionCreateOrConnectWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionUpsertWithWhereUniqueWithoutNotebookInput], {
    nullable: true,
  })
  upsert?: NotebookUserPermissionUpsertWithWhereUniqueWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field(() => NotebookUserPermissionCreateManyNotebookInputEnvelope, {
    nullable: true,
  })
  createMany?: NotebookUserPermissionCreateManyNotebookInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionWhereUniqueInput], { nullable: true })
  set?: NotebookUserPermissionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionWhereUniqueInput], { nullable: true })
  disconnect?: NotebookUserPermissionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionWhereUniqueInput], { nullable: true })
  delete?: NotebookUserPermissionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionWhereUniqueInput], { nullable: true })
  connect?: NotebookUserPermissionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionUpdateWithWhereUniqueWithoutNotebookInput], {
    nullable: true,
  })
  update?: NotebookUserPermissionUpdateWithWhereUniqueWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionUpdateManyWithWhereWithoutNotebookInput], {
    nullable: true,
  })
  updateMany?: NotebookUserPermissionUpdateManyWithWhereWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionScalarWhereInput], { nullable: true })
  deleteMany?: NotebookUserPermissionScalarWhereInput[] | undefined;
}
