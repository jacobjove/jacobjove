import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ActionScheduleAvgAggregate", {
  isAbstract: true,
})
export class ActionScheduleAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  habitId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  multiplier!: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  quantity!: number | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  templateId!: string | null;
}
