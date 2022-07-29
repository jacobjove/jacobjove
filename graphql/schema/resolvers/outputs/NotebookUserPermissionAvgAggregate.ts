import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("NotebookUserPermissionAvgAggregate", {
  isAbstract: true,
})
export class NotebookUserPermissionAvgAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, { nullable: true })
  notebookId!: number | null;
}
