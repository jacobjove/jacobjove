import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ActAvgAggregate", {
  isAbstract: true,
})
export class ActAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  parentId!: number | null;
}
