import * as TypeGraphQL from "type-graphql";
import { AccountCreateInput } from "../../../inputs/AccountCreateInput";

@TypeGraphQL.ArgsType()
export class CreateAccountArgs {
  @TypeGraphQL.Field((_type) => AccountCreateInput, {
    nullable: false,
  })
  data!: AccountCreateInput;
}
