import * as TypeGraphQL from "type-graphql";
import { ActionWhereInput } from "../inputs/ActionWhereInput";

@TypeGraphQL.InputType("ActionRelationFilter", {
  isAbstract: true,
})
export class ActionRelationFilter {
  @TypeGraphQL.Field((_type) => ActionWhereInput, {
    nullable: true,
  })
  is?: ActionWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ActionWhereInput, {
    nullable: true,
  })
  isNot?: ActionWhereInput | undefined;
}
