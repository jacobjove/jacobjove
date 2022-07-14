import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("ActionScheduleTemplateCount", {
  isAbstract: true,
})
export class ActionScheduleTemplateCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  actionSchedules!: number;
}
