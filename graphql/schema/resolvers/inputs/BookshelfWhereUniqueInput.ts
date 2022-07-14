import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("BookshelfWhereUniqueInput", {
  isAbstract: true,
})
export class BookshelfWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  slug?: string | undefined;
}
