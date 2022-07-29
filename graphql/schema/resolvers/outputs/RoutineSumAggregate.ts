import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("RoutineSumAggregate", {
  isAbstract: true,
})
export class RoutineSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  durationInMinutes!: number | null;
}
