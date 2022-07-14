import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("IdentityCount", {
  isAbstract: true,
})
export class IdentityCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  identities!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  actionRelations!: number;
}
