import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookUserPermissionOrderByWithRelationInput } from "../../../inputs/NotebookUserPermissionOrderByWithRelationInput";
import { NotebookUserPermissionWhereInput } from "../../../inputs/NotebookUserPermissionWhereInput";
import { NotebookUserPermissionWhereUniqueInput } from "../../../inputs/NotebookUserPermissionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateNotebookUserPermissionArgs {
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
}
