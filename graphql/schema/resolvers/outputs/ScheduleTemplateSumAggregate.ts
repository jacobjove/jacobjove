import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("ScheduleTemplateSumAggregate", {
  isAbstract: true,
})
export class ScheduleTemplateSumAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  multiplier!: number | null;
}
