import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("CategorizationAvgAggregate", {
  isAbstract: true,
})
export class CategorizationAvgAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  categoryId!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  actId!: number | null;
}
