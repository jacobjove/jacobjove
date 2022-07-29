import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ActionScheduleTemplateCount", {
  isAbstract: true,
})
export class ActionScheduleTemplateCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  actionSchedules!: number;
}
