import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionCreateManyNotebookInputEnvelope } from "../inputs/NotebookUserPermissionCreateManyNotebookInputEnvelope";
import { NotebookUserPermissionCreateOrConnectWithoutNotebookInput } from "../inputs/NotebookUserPermissionCreateOrConnectWithoutNotebookInput";
import { NotebookUserPermissionCreateWithoutNotebookInput } from "../inputs/NotebookUserPermissionCreateWithoutNotebookInput";
import { NotebookUserPermissionWhereUniqueInput } from "../inputs/NotebookUserPermissionWhereUniqueInput";

@TypeGraphQL.InputType("NotebookUserPermissionCreateNestedManyWithoutNotebookInput", {
  isAbstract: true,
})
export class NotebookUserPermissionCreateNestedManyWithoutNotebookInput {
  @TypeGraphQL.Field(() => [NotebookUserPermissionCreateWithoutNotebookInput], {
    nullable: true,
  })
  create?: NotebookUserPermissionCreateWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionCreateOrConnectWithoutNotebookInput], {
    nullable: true,
  })
  connectOrCreate?: NotebookUserPermissionCreateOrConnectWithoutNotebookInput[] | undefined;

  @TypeGraphQL.Field(() => NotebookUserPermissionCreateManyNotebookInputEnvelope, {
    nullable: true,
  })
  createMany?: NotebookUserPermissionCreateManyNotebookInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionWhereUniqueInput], { nullable: true })
  connect?: NotebookUserPermissionWhereUniqueInput[] | undefined;
}
