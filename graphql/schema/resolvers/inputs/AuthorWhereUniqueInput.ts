import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("AuthorWhereUniqueInput", {
  isAbstract: true,
})
export class AuthorWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  slug?: string | undefined;
}
