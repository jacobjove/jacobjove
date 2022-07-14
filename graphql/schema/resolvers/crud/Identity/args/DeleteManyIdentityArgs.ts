import * as TypeGraphQL from "type-graphql";
import { IdentityWhereInput } from "../../../inputs/IdentityWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyIdentityArgs {
  @TypeGraphQL.Field((_type) => IdentityWhereInput, {
    nullable: true,
  })
  where?: IdentityWhereInput | undefined;
}
