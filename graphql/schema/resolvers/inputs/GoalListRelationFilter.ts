import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalWhereInput } from "../inputs/GoalWhereInput";

@TypeGraphQL.InputType("GoalListRelationFilter", {
  isAbstract: true,
})
export class GoalListRelationFilter {
  @TypeGraphQL.Field((_type) => GoalWhereInput, { nullable: true })
  every?: GoalWhereInput | undefined;

  @TypeGraphQL.Field((_type) => GoalWhereInput, { nullable: true })
  some?: GoalWhereInput | undefined;

  @TypeGraphQL.Field((_type) => GoalWhereInput, { nullable: true })
  none?: GoalWhereInput | undefined;
}
