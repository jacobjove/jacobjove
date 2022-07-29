import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityWhereUniqueInput } from "../../../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteIdentityArgs {
  @TypeGraphQL.Field((_type) => IdentityWhereUniqueInput, { nullable: false })
  where!: IdentityWhereUniqueInput;
}
