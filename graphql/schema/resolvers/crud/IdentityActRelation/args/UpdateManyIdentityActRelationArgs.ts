import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationUpdateManyMutationInput } from "../../../inputs/IdentityActRelationUpdateManyMutationInput";
import { IdentityActRelationWhereInput } from "../../../inputs/IdentityActRelationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyIdentityActRelationArgs {
  @TypeGraphQL.Field(() => IdentityActRelationUpdateManyMutationInput, { nullable: false })
  data!: IdentityActRelationUpdateManyMutationInput;

  @TypeGraphQL.Field(() => IdentityActRelationWhereInput, { nullable: true })
  where?: IdentityActRelationWhereInput | undefined;
}
