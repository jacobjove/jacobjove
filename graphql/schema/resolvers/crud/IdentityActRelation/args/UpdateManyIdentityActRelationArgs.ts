import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationUpdateManyMutationInput } from "../../../inputs/IdentityActRelationUpdateManyMutationInput";
import { IdentityActRelationWhereInput } from "../../../inputs/IdentityActRelationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyIdentityActRelationArgs {
  @TypeGraphQL.Field((_type) => IdentityActRelationUpdateManyMutationInput, { nullable: false })
  data!: IdentityActRelationUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => IdentityActRelationWhereInput, { nullable: true })
  where?: IdentityActRelationWhereInput | undefined;
}
