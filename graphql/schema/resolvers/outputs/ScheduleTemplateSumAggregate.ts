import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ScheduleTemplateSumAggregate", {
  isAbstract: true,
})
export class ScheduleTemplateSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  multiplier!: number | null;
}
