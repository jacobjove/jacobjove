import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountCreateInput } from "../../../inputs/AccountCreateInput";
import { AccountUpdateInput } from "../../../inputs/AccountUpdateInput";
import { AccountWhereUniqueInput } from "../../../inputs/AccountWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertAccountArgs {
  @TypeGraphQL.Field(() => AccountWhereUniqueInput, { nullable: false })
  where!: AccountWhereUniqueInput;

  @TypeGraphQL.Field(() => AccountCreateInput, { nullable: false })
  create!: AccountCreateInput;

  @TypeGraphQL.Field(() => AccountUpdateInput, { nullable: false })
  update!: AccountUpdateInput;
}
