import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationWhereInput } from "../inputs/IdentityActRelationWhereInput";

@TypeGraphQL.InputType("IdentityActRelationListRelationFilter", {
  isAbstract: true,
})
export class IdentityActRelationListRelationFilter {
  @TypeGraphQL.Field((_type) => IdentityActRelationWhereInput, { nullable: true })
  every?: IdentityActRelationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityActRelationWhereInput, { nullable: true })
  some?: IdentityActRelationWhereInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityActRelationWhereInput, { nullable: true })
  none?: IdentityActRelationWhereInput | undefined;
}
