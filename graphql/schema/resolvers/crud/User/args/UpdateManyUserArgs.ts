import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserUpdateManyMutationInput } from "../../../inputs/UserUpdateManyMutationInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyUserArgs {
  @TypeGraphQL.Field(() => UserUpdateManyMutationInput, { nullable: false })
  data!: UserUpdateManyMutationInput;

  @TypeGraphQL.Field(() => UserWhereInput, { nullable: true })
  where?: UserWhereInput | undefined;
}
