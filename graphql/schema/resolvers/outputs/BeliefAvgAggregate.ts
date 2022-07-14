import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("BeliefAvgAggregate", {
  isAbstract: true,
})
export class BeliefAvgAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;
}
