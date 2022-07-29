import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountWhereUniqueInput } from "../../../inputs/AccountWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteAccountArgs {
  @TypeGraphQL.Field((_type) => AccountWhereUniqueInput, { nullable: false })
  where!: AccountWhereUniqueInput;
}
