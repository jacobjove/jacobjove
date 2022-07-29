import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("MantraAvgAggregate", {
  isAbstract: true,
})
export class MantraAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  mantraId!: number | null;
}
