import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("NotebookSumAggregate", {
  isAbstract: true,
})
export class NotebookSumAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  ownerId!: string | null;
}
