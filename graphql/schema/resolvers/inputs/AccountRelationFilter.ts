import * as TypeGraphQL from "type-graphql";
import { AccountWhereInput } from "../inputs/AccountWhereInput";

@TypeGraphQL.InputType("AccountRelationFilter", {
  isAbstract: true,
})
export class AccountRelationFilter {
  @TypeGraphQL.Field((_type) => AccountWhereInput, {
    nullable: true,
  })
  is?: AccountWhereInput | undefined;

  @TypeGraphQL.Field((_type) => AccountWhereInput, {
    nullable: true,
  })
  isNot?: AccountWhereInput | undefined;
}
