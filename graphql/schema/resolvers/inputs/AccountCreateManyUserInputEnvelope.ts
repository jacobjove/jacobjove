import * as TypeGraphQL from "type-graphql";
import { AccountCreateManyUserInput } from "../inputs/AccountCreateManyUserInput";

@TypeGraphQL.InputType("AccountCreateManyUserInputEnvelope", {
  isAbstract: true,
})
export class AccountCreateManyUserInputEnvelope {
  @TypeGraphQL.Field((_type) => [AccountCreateManyUserInput], {
    nullable: false,
  })
  data!: AccountCreateManyUserInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
