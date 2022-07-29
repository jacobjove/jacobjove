import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("ActionScheduleWhereUniqueInput", {
  isAbstract: true,
})
export class ActionScheduleWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;
}
