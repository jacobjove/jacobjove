import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityWhereInput } from "../../../inputs/IdentityWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyIdentityArgs {
  @TypeGraphQL.Field(() => IdentityWhereInput, { nullable: true })
  where?: IdentityWhereInput | undefined;
}
