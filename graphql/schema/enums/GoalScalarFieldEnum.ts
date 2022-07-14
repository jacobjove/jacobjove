import * as TypeGraphQL from "type-graphql";

export enum GoalScalarFieldEnum {
  id = "id",
  habitId = "habitId",
  goalId = "goalId",
  quantity = "quantity",
}
TypeGraphQL.registerEnumType(GoalScalarFieldEnum, {
  name: "GoalScalarFieldEnum",
  description: undefined,
});
