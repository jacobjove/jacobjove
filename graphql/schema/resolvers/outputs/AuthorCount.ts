import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("AuthorCount", {
  isAbstract: true,
})
export class AuthorCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  authorships!: number;
}
