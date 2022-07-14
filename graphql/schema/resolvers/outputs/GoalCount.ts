import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("GoalCount", {
  isAbstract: true,
})
export class GoalCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  milestones!: number;
}
