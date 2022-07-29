import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("CalendarSumAggregate", {
  isAbstract: true,
})
export class CalendarSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  accountId!: string | null;
}
