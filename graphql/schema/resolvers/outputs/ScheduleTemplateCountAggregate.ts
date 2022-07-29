import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ScheduleTemplateCountAggregate", {
  isAbstract: true,
})
export class ScheduleTemplateCountAggregate {
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  frequency!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  multiplier!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  chron!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
