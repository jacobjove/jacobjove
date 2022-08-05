import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionWhereInput } from "../inputs/ActionWhereInput";

@TypeGraphQL.InputType("ActionRelationFilter", { isAbstract: true })
export class ActionRelationFilter {
  @TypeGraphQL.Field(() => ActionWhereInput, { nullable: true })
  is?: ActionWhereInput | undefined;

  @TypeGraphQL.Field(() => ActionWhereInput, { nullable: true })
  isNot?: ActionWhereInput | undefined;
}
