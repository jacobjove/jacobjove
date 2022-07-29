import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountCreateManyUserInput } from "../inputs/AccountCreateManyUserInput";

@TypeGraphQL.InputType("AccountCreateManyUserInputEnvelope", {
  isAbstract: true,
})
export class AccountCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(() => [AccountCreateManyUserInput], { nullable: false })
  data!: AccountCreateManyUserInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
