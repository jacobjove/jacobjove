import * as TypeGraphQL from "type-graphql";
import { AccountUpdateWithoutUserInput } from "../inputs/AccountUpdateWithoutUserInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class AccountUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => AccountWhereUniqueInput, {
    nullable: false,
  })
  where!: AccountWhereUniqueInput;

  @TypeGraphQL.Field((_type) => AccountUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: AccountUpdateWithoutUserInput;
}
