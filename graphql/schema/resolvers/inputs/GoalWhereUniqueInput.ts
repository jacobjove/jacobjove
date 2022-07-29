import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("GoalWhereUniqueInput", {
  isAbstract: true,
})
export class GoalWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;
}
