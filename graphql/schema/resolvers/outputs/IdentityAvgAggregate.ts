import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("IdentityAvgAggregate", {
  isAbstract: true,
})
export class IdentityAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;
}
