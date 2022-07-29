import * as TypeGraphQL from "type-graphql-v2-fork";
import { RedirectCreateInput } from "../../../inputs/RedirectCreateInput";
import { RedirectUpdateInput } from "../../../inputs/RedirectUpdateInput";
import { RedirectWhereUniqueInput } from "../../../inputs/RedirectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertRedirectArgs {
  @TypeGraphQL.Field((_type) => RedirectWhereUniqueInput, { nullable: false })
  where!: RedirectWhereUniqueInput;

  @TypeGraphQL.Field((_type) => RedirectCreateInput, { nullable: false })
  create!: RedirectCreateInput;

  @TypeGraphQL.Field((_type) => RedirectUpdateInput, { nullable: false })
  update!: RedirectUpdateInput;
}
