import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ValueAvgAggregate", {
  isAbstract: true,
})
export class ValueAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  valueId!: number | null;
}
