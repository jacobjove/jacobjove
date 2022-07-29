import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("BeliefAvgAggregate", {
  isAbstract: true,
})
export class BeliefAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;
}
