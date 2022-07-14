import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("ActionScheduleCount", {
  isAbstract: true,
})
export class ActionScheduleCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  calendarEvents!: number;
}
