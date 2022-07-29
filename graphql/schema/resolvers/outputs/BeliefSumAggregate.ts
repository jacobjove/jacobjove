import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("BeliefSumAggregate", {
  isAbstract: true,
})
export class BeliefSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;
}
