import * as TypeGraphQL from "type-graphql";
import { IdentityWhereUniqueInput } from "../../../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteIdentityArgs {
  @TypeGraphQL.Field((_type) => IdentityWhereUniqueInput, {
    nullable: false,
  })
  where!: IdentityWhereUniqueInput;
}
