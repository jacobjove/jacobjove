import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ScheduleTemplateAvgAggregate", {
  isAbstract: true,
})
export class ScheduleTemplateAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  multiplier!: number | null;
}
