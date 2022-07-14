import * as TypeGraphQL from "type-graphql";
import { BeliefWhereInput } from "../inputs/BeliefWhereInput";

@TypeGraphQL.InputType("BeliefRelationFilter", {
  isAbstract: true,
})
export class BeliefRelationFilter {
  @TypeGraphQL.Field((_type) => BeliefWhereInput, {
    nullable: true,
  })
  is?: BeliefWhereInput | undefined;

  @TypeGraphQL.Field((_type) => BeliefWhereInput, {
    nullable: true,
  })
  isNot?: BeliefWhereInput | undefined;
}
