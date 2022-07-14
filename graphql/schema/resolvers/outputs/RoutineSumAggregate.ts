import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("RoutineSumAggregate", {
  isAbstract: true,
})
export class RoutineSumAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  userId!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  durationInMinutes!: number | null;
}
