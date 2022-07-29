import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("NotebookAvgAggregate", {
  isAbstract: true,
})
export class NotebookAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  ownerId!: number | null;
}
