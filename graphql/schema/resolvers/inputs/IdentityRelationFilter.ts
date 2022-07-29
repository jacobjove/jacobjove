import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityWhereInput } from "../inputs/IdentityWhereInput";

@TypeGraphQL.InputType("IdentityRelationFilter", {
  isAbstract: true,
})
export class IdentityRelationFilter {
  @TypeGraphQL.Field(() => IdentityWhereInput, { nullable: true })
  is?: IdentityWhereInput | undefined;

  @TypeGraphQL.Field(() => IdentityWhereInput, { nullable: true })
  isNot?: IdentityWhereInput | undefined;
}
