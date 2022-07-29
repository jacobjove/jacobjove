import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ValueSumAggregate", {
  isAbstract: true,
})
export class ValueSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  valueId!: string | null;
}
