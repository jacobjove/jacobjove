import * as TypeGraphQL from "type-graphql-v2-fork";
import { RedirectCreateInput } from "../../../inputs/RedirectCreateInput";

@TypeGraphQL.ArgsType()
export class CreateRedirectArgs {
  @TypeGraphQL.Field(() => RedirectCreateInput, { nullable: false })
  data!: RedirectCreateInput;
}
