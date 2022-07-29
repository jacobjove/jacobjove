import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("BookSumAggregate", {
  isAbstract: true,
})
export class BookSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  publicationYear!: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  originalPublicationYear!: number | null;
}
