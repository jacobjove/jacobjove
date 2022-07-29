import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityWhereInput } from "../inputs/IdentityWhereInput";

@TypeGraphQL.InputType("IdentityRelationFilter", {
  isAbstract: true,
})
export class IdentityRelationFilter {
  @TypeGraphQL.Field((_type) => IdentityWhereInput, { nullable: true })
  is?: IdentityWhereInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityWhereInput, { nullable: true })
  isNot?: IdentityWhereInput | undefined;
}
