import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("BeliefCountAggregate", {
  isAbstract: true,
})
export class BeliefCountAggregate {
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  beliefId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  createdAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  updatedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  archivedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
