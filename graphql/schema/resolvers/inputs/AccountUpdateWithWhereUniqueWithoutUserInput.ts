import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountUpdateWithoutUserInput } from "../inputs/AccountUpdateWithoutUserInput";
import { AccountWhereUniqueInput } from "../inputs/AccountWhereUniqueInput";

@TypeGraphQL.InputType("AccountUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class AccountUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(() => AccountWhereUniqueInput, { nullable: false })
  where!: AccountWhereUniqueInput;

  @TypeGraphQL.Field(() => AccountUpdateWithoutUserInput, { nullable: false })
  data!: AccountUpdateWithoutUserInput;
}
