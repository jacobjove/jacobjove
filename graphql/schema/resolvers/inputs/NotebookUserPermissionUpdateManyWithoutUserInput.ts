import * as TypeGraphQL from "type-graphql-v2-fork";
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
  @TypeGraphQL.Field(() => [NotebookUserPermissionCreateWithoutUserInput], { nullable: true })
  create?: NotebookUserPermissionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: NotebookUserPermissionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  upsert?: NotebookUserPermissionUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => NotebookUserPermissionCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: NotebookUserPermissionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionWhereUniqueInput], { nullable: true })
  set?: NotebookUserPermissionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionWhereUniqueInput], { nullable: true })
  disconnect?: NotebookUserPermissionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionWhereUniqueInput], { nullable: true })
  delete?: NotebookUserPermissionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionWhereUniqueInput], { nullable: true })
  connect?: NotebookUserPermissionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  update?: NotebookUserPermissionUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  updateMany?: NotebookUserPermissionUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionScalarWhereInput], { nullable: true })
  deleteMany?: NotebookUserPermissionScalarWhereInput[] | undefined;
}
