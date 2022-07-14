import * as TypeGraphQL from "type-graphql";
import { IdentityUpdateManyMutationInput } from "../../../inputs/IdentityUpdateManyMutationInput";
import { IdentityWhereInput } from "../../../inputs/IdentityWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyIdentityArgs {
  @TypeGraphQL.Field((_type) => IdentityUpdateManyMutationInput, {
    nullable: false,
  })
  data!: IdentityUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => IdentityWhereInput, {
    nullable: true,
  })
  where?: IdentityWhereInput | undefined;
}
