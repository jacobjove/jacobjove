import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("BookshelfCount", { isAbstract: true })
export class BookshelfCount {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  shelvings!: number;
}
