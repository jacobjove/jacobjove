import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("BookCount", {
  isAbstract: true,
})
export class BookCount {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  authorships!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  readings!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  shelvings!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  BookReview!: number;
}
