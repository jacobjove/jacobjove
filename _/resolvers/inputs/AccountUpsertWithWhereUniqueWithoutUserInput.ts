import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountCreateWithoutUserInput } from "../inputs/AccountCreateWithoutUserInput";
import { AccountUpdateWithoutUserInput } from "../inputs/AccountUpdateWithoutUserInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountUpsertWithWhereUniqueWithoutUserInput", { isAbstract: true })
export class AccountUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(() => AccountWhereUniqueInput, { nullable: false })
  where!: AccountWhereUniqueInput;

  @TypeGraphQL.Field(() => AccountUpdateWithoutUserInput, { nullable: false })
  update!: AccountUpdateWithoutUserInput;

  @TypeGraphQL.Field(() => AccountCreateWithoutUserInput, { nullable: false })
  create!: AccountCreateWithoutUserInput;
}
