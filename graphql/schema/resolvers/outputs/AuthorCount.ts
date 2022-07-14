import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("AuthorCount", {
  isAbstract: true,
})
export class AuthorCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  authorships!: number;
}
