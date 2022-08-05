import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionCreateManyUserInputEnvelope } from "../inputs/NotebookUserPermissionCreateManyUserInputEnvelope";
import { NotebookUserPermissionCreateOrConnectWithoutUserInput } from "../inputs/NotebookUserPermissionCreateOrConnectWithoutUserInput";
import { NotebookUserPermissionCreateWithoutUserInput } from "../inputs/NotebookUserPermissionCreateWithoutUserInput";
import { NotebookUserPermissionWhereUniqueInput } from "../inputs/NotebookUserPermissionWhereUniqueInput";

@TypeGraphQL.InputType("NotebookUserPermissionCreateNestedManyWithoutUserInput", {
  isAbstract: true,
})
export class NotebookUserPermissionCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(() => [NotebookUserPermissionCreateWithoutUserInput], { nullable: true })
  create?: NotebookUserPermissionCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: NotebookUserPermissionCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => NotebookUserPermissionCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: NotebookUserPermissionCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionWhereUniqueInput], { nullable: true })
  connect?: NotebookUserPermissionWhereUniqueInput[] | undefined;
}
