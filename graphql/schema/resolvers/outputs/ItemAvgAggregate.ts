import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("ItemAvgAggregate", {
  isAbstract: true,
})
export class ItemAvgAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  listId!: number | null;
}
