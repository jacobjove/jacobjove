import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("CategorizationAvgAggregate", {
  isAbstract: true,
})
export class CategorizationAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  categoryId!: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  actId!: number | null;
}
