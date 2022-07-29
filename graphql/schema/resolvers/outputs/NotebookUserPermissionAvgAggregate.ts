import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("NotebookUserPermissionAvgAggregate", {
  isAbstract: true,
})
export class NotebookUserPermissionAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  notebookId!: number | null;
}
