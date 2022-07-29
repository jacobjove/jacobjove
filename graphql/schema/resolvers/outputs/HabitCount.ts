import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("HabitCount", {
  isAbstract: true,
})
export class HabitCount {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  schedules!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  tasks!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  calendarEvents!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  metricUsages!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  goals!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  routines!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  actions!: number;
}
