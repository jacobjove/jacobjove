import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ItemSumAggregate", {
  isAbstract: true,
})
export class ItemSumAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  listId!: string | null;
}
