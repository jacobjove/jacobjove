import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("IdentityAvgAggregate", {
  isAbstract: true,
})
export class IdentityAvgAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;
}
