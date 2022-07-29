import * as TypeGraphQL from "type-graphql-v2-fork";
import { RedirectWhereUniqueInput } from "../../../inputs/RedirectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteRedirectArgs {
  @TypeGraphQL.Field(() => RedirectWhereUniqueInput, { nullable: false })
  where!: RedirectWhereUniqueInput;
}
