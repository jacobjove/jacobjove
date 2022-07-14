import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("NotebookAvgAggregate", {
  isAbstract: true,
})
export class NotebookAvgAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  ownerId!: number | null;
}
