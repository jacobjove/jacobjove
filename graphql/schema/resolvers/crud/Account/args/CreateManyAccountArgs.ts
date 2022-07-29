import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountCreateManyInput } from "../../../inputs/AccountCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAccountArgs {
  @TypeGraphQL.Field(() => [AccountCreateManyInput], { nullable: false })
  data!: AccountCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
