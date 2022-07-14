import * as TypeGraphQL from "type-graphql";
import { AccountCreateWithoutUserInput } from "../inputs/AccountCreateWithoutUserInput";
import { AccountUpdateWithoutUserInput } from "../inputs/AccountUpdateWithoutUserInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class AccountUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => AccountWhereUniqueInput, {
    nullable: false,
  })
  where!: AccountWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AccountUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: AccountUpdateWithoutUserInput;

  @TypeGraphQL.Field((_type) => AccountCreateWithoutUserInput, {
    nullable: false,
  })
  create!: AccountCreateWithoutUserInput;
}
