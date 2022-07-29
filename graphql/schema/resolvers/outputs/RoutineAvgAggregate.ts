import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("RoutineAvgAggregate", {
  isAbstract: true,
})
export class RoutineAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  durationInMinutes!: number | null;
}
