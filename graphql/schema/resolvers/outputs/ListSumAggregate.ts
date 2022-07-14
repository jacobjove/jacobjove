import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("ListSumAggregate", {
  isAbstract: true,
})
export class ListSumAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  ownerId!: string | null;
}
