import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountWhereInput } from "../inputs/AccountWhereInput";

@TypeGraphQL.InputType("AccountRelationFilter", { isAbstract: true })
export class AccountRelationFilter {
  @TypeGraphQL.Field(() => AccountWhereInput, { nullable: true })
  is?: AccountWhereInput | undefined;

  @TypeGraphQL.Field(() => AccountWhereInput, { nullable: true })
  isNot?: AccountWhereInput | undefined;
}
