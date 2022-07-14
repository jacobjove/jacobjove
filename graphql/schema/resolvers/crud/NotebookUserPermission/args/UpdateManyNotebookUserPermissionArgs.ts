import * as TypeGraphQL from "type-graphql";
import { NotebookUserPermissionUpdateManyMutationInput } from "../../../inputs/NotebookUserPermissionUpdateManyMutationInput";
import { NotebookUserPermissionWhereInput } from "../../../inputs/NotebookUserPermissionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNotebookUserPermissionArgs {
  @TypeGraphQL.Field((_type) => NotebookUserPermissionUpdateManyMutationInput, {
    nullable: false,
  })
  data!: NotebookUserPermissionUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => NotebookUserPermissionWhereInput, {
    nullable: true,
  })
  where?: NotebookUserPermissionWhereInput | undefined;
}
