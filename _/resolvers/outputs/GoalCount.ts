import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("GoalCount", { isAbstract: true })
export class GoalCount {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  milestones!: number;
}
