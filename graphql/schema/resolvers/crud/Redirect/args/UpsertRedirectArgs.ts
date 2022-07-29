import * as TypeGraphQL from "type-graphql-v2-fork";
import { RedirectCreateInput } from "../../../inputs/RedirectCreateInput";
import { RedirectUpdateInput } from "../../../inputs/RedirectUpdateInput";
import { RedirectWhereUniqueInput } from "../../../inputs/RedirectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertRedirectArgs {
  @TypeGraphQL.Field(() => RedirectWhereUniqueInput, { nullable: false })
  where!: RedirectWhereUniqueInput;

  @TypeGraphQL.Field(() => RedirectCreateInput, { nullable: false })
  create!: RedirectCreateInput;

  @TypeGraphQL.Field(() => RedirectUpdateInput, { nullable: false })
  update!: RedirectUpdateInput;
}
