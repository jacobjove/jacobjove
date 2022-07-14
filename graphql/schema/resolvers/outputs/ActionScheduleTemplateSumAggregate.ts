import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("ActionScheduleTemplateSumAggregate", {
  isAbstract: true,
})
export class ActionScheduleTemplateSumAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  actId!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  scheduleTemplateId!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  multiplier!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  quantity!: number | null;
}
