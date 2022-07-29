import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ActionScheduleTemplateAvgAggregate", {
  isAbstract: true,
})
export class ActionScheduleTemplateAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  actId!: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  scheduleTemplateId!: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  multiplier!: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  quantity!: number | null;
}
