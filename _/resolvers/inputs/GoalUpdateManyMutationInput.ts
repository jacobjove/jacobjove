import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("GoalUpdateManyMutationInput", { isAbstract: true })
export class GoalUpdateManyMutationInput {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  quantity?: number | undefined;
}
