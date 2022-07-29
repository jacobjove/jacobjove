import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityCreateInput } from "../../../inputs/IdentityCreateInput";
import { IdentityUpdateInput } from "../../../inputs/IdentityUpdateInput";
import { IdentityWhereUniqueInput } from "../../../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertIdentityArgs {
  @TypeGraphQL.Field((_type) => IdentityWhereUniqueInput, { nullable: false })
  where!: IdentityWhereUniqueInput;

  @TypeGraphQL.Field((_type) => IdentityCreateInput, { nullable: false })
  create!: IdentityCreateInput;

  @TypeGraphQL.Field((_type) => IdentityUpdateInput, { nullable: false })
  update!: IdentityUpdateInput;
}
