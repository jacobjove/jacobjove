import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("BeliefSumAggregate", {
  isAbstract: true,
})
export class BeliefSumAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  userId!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  beliefId!: string | null;
}
