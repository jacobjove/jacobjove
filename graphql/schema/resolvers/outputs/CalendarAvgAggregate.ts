import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("CalendarAvgAggregate", {
  isAbstract: true,
})
export class CalendarAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  accountId!: number | null;
}
