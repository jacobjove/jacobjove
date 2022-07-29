import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("GoalWhereUniqueInput", {
  isAbstract: true,
})
export class GoalWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;
}
