import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ActionScheduleTemplateSumAggregate", {
  isAbstract: true,
})
export class ActionScheduleTemplateSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  actId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  scheduleTemplateId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  multiplier!: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  quantity!: number | null;
}
