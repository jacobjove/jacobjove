import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("HabitSumAggregate", {
  isAbstract: true,
})
export class HabitSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  actId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  defaultDurationInMinutes!: number | null;
}
