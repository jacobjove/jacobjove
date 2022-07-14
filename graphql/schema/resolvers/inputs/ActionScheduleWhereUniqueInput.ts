import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("ActionScheduleWhereUniqueInput", {
  isAbstract: true,
})
export class ActionScheduleWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;
}
