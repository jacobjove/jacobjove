import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("BookshelfCount", {
  isAbstract: true,
})
export class BookshelfCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  shelvings!: number;
}
