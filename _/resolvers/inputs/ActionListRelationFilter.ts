import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionWhereInput } from "../inputs/ActionWhereInput";

@TypeGraphQL.InputType("ActionListRelationFilter", { isAbstract: true })
export class ActionListRelationFilter {
  @TypeGraphQL.Field(() => ActionWhereInput, { nullable: true })
  every?: ActionWhereInput | undefined;

  @TypeGraphQL.Field(() => ActionWhereInput, { nullable: true })
  some?: ActionWhereInput | undefined;

  @TypeGraphQL.Field(() => ActionWhereInput, { nullable: true })
  none?: ActionWhereInput | undefined;
}
