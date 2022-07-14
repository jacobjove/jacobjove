import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("AuthorshipAvgAggregate", {
  isAbstract: true,
})
export class AuthorshipAvgAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  authorId!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  bookId!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  position!: number | null;
}
