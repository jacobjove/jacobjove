import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("ScheduleTemplateCount", {
  isAbstract: true,
})
export class ScheduleTemplateCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  actionScheduleTemplates!: number;
}
