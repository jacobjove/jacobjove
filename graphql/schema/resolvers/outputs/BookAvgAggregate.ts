import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("BookAvgAggregate", {
  isAbstract: true,
})
export class BookAvgAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  publicationYear!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  originalPublicationYear!: number | null;
}
