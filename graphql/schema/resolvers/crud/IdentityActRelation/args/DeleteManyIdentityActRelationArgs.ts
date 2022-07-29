import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationWhereInput } from "../../../inputs/IdentityActRelationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyIdentityActRelationArgs {
  @TypeGraphQL.Field(() => IdentityActRelationWhereInput, { nullable: true })
  where?: IdentityActRelationWhereInput | undefined;
}
