import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("BookshelfSumAggregate", {
  isAbstract: true,
})
export class BookshelfSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  ownerId!: string | null;
}
