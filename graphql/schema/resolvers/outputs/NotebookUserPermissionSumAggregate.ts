import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("NotebookUserPermissionSumAggregate", {
  isAbstract: true,
})
export class NotebookUserPermissionSumAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  userId!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  notebookId!: string | null;
}
