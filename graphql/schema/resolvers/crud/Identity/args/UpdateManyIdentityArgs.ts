import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityUpdateManyMutationInput } from "../../../inputs/IdentityUpdateManyMutationInput";
import { IdentityWhereInput } from "../../../inputs/IdentityWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyIdentityArgs {
  @TypeGraphQL.Field(() => IdentityUpdateManyMutationInput, { nullable: false })
  data!: IdentityUpdateManyMutationInput;

  @TypeGraphQL.Field(() => IdentityWhereInput, { nullable: true })
  where?: IdentityWhereInput | undefined;
}
