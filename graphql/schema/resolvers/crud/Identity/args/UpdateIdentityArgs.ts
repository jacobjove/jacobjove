import * as TypeGraphQL from "type-graphql";
import { IdentityUpdateInput } from "../../../inputs/IdentityUpdateInput";
import { IdentityWhereUniqueInput } from "../../../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateIdentityArgs {
  @TypeGraphQL.Field((_type) => IdentityUpdateInput, {
    nullable: false,
  })
  data!: IdentityUpdateInput;

  @TypeGraphQL.Field((_type) => IdentityWhereUniqueInput, {
    nullable: false,
  })
  where!: IdentityWhereUniqueInput;
}
