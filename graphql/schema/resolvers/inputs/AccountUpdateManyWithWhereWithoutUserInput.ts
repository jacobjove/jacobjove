import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountScalarWhereInput } from "../inputs/AccountScalarWhereInput";
import { AccountUpdateManyMutationInput } from "../inputs/AccountUpdateManyMutationInput";

@TypeGraphQL.InputType("AccountUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true,
})
export class AccountUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field((_type) => AccountScalarWhereInput, { nullable: false })
  where!: AccountScalarWhereInput;

  @TypeGraphQL.Field((_type) => AccountUpdateManyMutationInput, { nullable: false })
  data!: AccountUpdateManyMutationInput;
}
