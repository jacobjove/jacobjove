import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("AuthorshipAvgAggregate", {
  isAbstract: true,
})
export class AuthorshipAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  authorId!: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  bookId!: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  position!: number | null;
}
