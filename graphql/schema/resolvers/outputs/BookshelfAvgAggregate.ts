import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("BookshelfAvgAggregate", {
  isAbstract: true,
})
export class BookshelfAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  ownerId!: number | null;
}
