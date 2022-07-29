import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityUpdateInput } from "../../../inputs/IdentityUpdateInput";
import { IdentityWhereUniqueInput } from "../../../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateIdentityArgs {
  @TypeGraphQL.Field(() => IdentityUpdateInput, { nullable: false })
  data!: IdentityUpdateInput;

  @TypeGraphQL.Field(() => IdentityWhereUniqueInput, { nullable: false })
  where!: IdentityWhereUniqueInput;
}
