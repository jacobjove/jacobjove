import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionScalarFieldEnum } from "../../../../enums/NotebookUserPermissionScalarFieldEnum";
import { NotebookUserPermissionOrderByWithRelationInput } from "../../../inputs/NotebookUserPermissionOrderByWithRelationInput";
import { NotebookUserPermissionWhereInput } from "../../../inputs/NotebookUserPermissionWhereInput";
import { NotebookUserPermissionWhereUniqueInput } from "../../../inputs/NotebookUserPermissionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyNotebookUserPermissionArgs {
  @TypeGraphQL.Field(() => NotebookUserPermissionWhereInput, { nullable: true })
  where?: NotebookUserPermissionWhereInput | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: NotebookUserPermissionOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => NotebookUserPermissionWhereUniqueInput, { nullable: true })
  cursor?: NotebookUserPermissionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(() => [NotebookUserPermissionScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "userId" | "notebookId" | "archivedAt"> | undefined;
}
