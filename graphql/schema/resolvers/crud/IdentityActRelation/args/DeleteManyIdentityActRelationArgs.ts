import * as TypeGraphQL from "type-graphql";
import { IdentityActRelationWhereInput } from "../../../inputs/IdentityActRelationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyIdentityActRelationArgs {
  @TypeGraphQL.Field((_type) => IdentityActRelationWhereInput, {
    nullable: true,
  })
  where?: IdentityActRelationWhereInput | undefined;
}
