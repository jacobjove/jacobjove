import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("HabitAvgAggregate", {
  isAbstract: true,
})
export class HabitAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  actId!: number | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  defaultDurationInMinutes!: number | null;
}
