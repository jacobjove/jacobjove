import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("NotebookUserPermissionCountAggregate", {
  isAbstract: true,
})
export class NotebookUserPermissionCountAggregate {
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  notebookId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  archivedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
