import * as TypeGraphQL from "type-graphql";
import { ActWhereInput } from "../inputs/ActWhereInput";

@TypeGraphQL.InputType("ActRelationFilter", {
  isAbstract: true,
})
export class ActRelationFilter {
  @TypeGraphQL.Field((_type) => ActWhereInput, {
    nullable: true,
  })
  is?: ActWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ActWhereInput, {
    nullable: true,
  })
  isNot?: ActWhereInput | undefined;
}
