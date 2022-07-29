import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountWhereUniqueInput } from "../../../inputs/AccountWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAccountArgs {
  @TypeGraphQL.Field(() => AccountWhereUniqueInput, { nullable: false })
  where!: AccountWhereUniqueInput;
}
