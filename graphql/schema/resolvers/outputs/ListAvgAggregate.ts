import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("ListAvgAggregate", {
  isAbstract: true,
})
export class ListAvgAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  ownerId!: number | null;
}
