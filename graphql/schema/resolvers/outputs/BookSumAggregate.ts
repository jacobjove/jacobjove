import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("BookSumAggregate", {
  isAbstract: true,
})
export class BookSumAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  publicationYear!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  originalPublicationYear!: number | null;
}
