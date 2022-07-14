import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("CalendarAvgAggregate", {
  isAbstract: true,
})
export class CalendarAvgAggregate {
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
  accountId!: number | null;
}
