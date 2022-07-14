import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("NoteSumAggregate", {
  isAbstract: true,
})
export class NoteSumAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  notebookId!: string | null;
}
