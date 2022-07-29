import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("IdentityCount", {
  isAbstract: true,
})
export class IdentityCount {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  identities!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  actionRelations!: number;
}
