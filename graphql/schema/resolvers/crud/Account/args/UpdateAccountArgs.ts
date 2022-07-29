import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountUpdateInput } from "../../../inputs/AccountUpdateInput";
import { AccountWhereUniqueInput } from "../../../inputs/AccountWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateAccountArgs {
  @TypeGraphQL.Field((_type) => AccountUpdateInput, { nullable: false })
  data!: AccountUpdateInput;

  @TypeGraphQL.Field((_type) => AccountWhereUniqueInput, { nullable: false })
  where!: AccountWhereUniqueInput;
}
