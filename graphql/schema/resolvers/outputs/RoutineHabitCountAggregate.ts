import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("RoutineHabitCountAggregate", {
  isAbstract: true,
})
export class RoutineHabitCountAggregate {
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  routineId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  habitId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  position!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  durationInMinutes!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  createdAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  updatedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  archivedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
