import * as TypeGraphQL from "type-graphql-v2-fork";
import { AccountUpdateManyMutationInput } from "../../../inputs/AccountUpdateManyMutationInput";
import { AccountWhereInput } from "../../../inputs/AccountWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAccountArgs {
  @TypeGraphQL.Field(() => AccountUpdateManyMutationInput, { nullable: false })
  data!: AccountUpdateManyMutationInput;

  @TypeGraphQL.Field(() => AccountWhereInput, { nullable: true })
  where?: AccountWhereInput | undefined;
}
