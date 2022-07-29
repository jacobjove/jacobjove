import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ActionScheduleCount", {
  isAbstract: true,
})
export class ActionScheduleCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  calendarEvents!: number;
}
