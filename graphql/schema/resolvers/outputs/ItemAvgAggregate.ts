import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ItemAvgAggregate", {
  isAbstract: true,
})
export class ItemAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  listId!: number | null;
}
