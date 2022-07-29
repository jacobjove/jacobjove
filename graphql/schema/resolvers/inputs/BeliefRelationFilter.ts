import * as TypeGraphQL from "type-graphql-v2-fork";
import { BeliefWhereInput } from "../inputs/BeliefWhereInput";

@TypeGraphQL.InputType("BeliefRelationFilter", {
  isAbstract: true,
})
export class BeliefRelationFilter {
  @TypeGraphQL.Field(() => BeliefWhereInput, { nullable: true })
  is?: BeliefWhereInput | undefined;

  @TypeGraphQL.Field(() => BeliefWhereInput, { nullable: true })
  isNot?: BeliefWhereInput | undefined;
}
