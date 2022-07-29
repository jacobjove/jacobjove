import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionUpdateManyMutationInput } from "../../../inputs/NotebookUserPermissionUpdateManyMutationInput";
import { NotebookUserPermissionWhereInput } from "../../../inputs/NotebookUserPermissionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyNotebookUserPermissionArgs {
  @TypeGraphQL.Field(() => NotebookUserPermissionUpdateManyMutationInput, { nullable: false })
  data!: NotebookUserPermissionUpdateManyMutationInput;

  @TypeGraphQL.Field(() => NotebookUserPermissionWhereInput, { nullable: true })
  where?: NotebookUserPermissionWhereInput | undefined;
}
