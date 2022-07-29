import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityCreateInput } from "../../../inputs/IdentityCreateInput";

@TypeGraphQL.ArgsType()
export class CreateIdentityArgs {
  @TypeGraphQL.Field((_type) => IdentityCreateInput, { nullable: false })
  data!: IdentityCreateInput;
}
