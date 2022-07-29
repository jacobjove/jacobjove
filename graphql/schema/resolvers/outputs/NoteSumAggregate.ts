import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("NoteSumAggregate", {
  isAbstract: true,
})
export class NoteSumAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  notebookId!: string | null;
}
