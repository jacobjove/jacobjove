import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("ValueAvgAggregate", {
  isAbstract: true,
})
export class ValueAvgAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  userId!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: true,
  })
  valueId!: number | null;
}
