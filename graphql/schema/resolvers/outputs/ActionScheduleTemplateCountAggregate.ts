import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ActionScheduleTemplateCountAggregate", {
  isAbstract: true,
})
export class ActionScheduleTemplateCountAggregate {
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  actId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  scheduleTemplateId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  frequency!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  multiplier!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  quantity!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
