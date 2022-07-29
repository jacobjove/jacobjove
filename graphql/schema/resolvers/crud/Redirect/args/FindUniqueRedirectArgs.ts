import * as TypeGraphQL from "type-graphql-v2-fork";
import { RedirectWhereUniqueInput } from "../../../inputs/RedirectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueRedirectArgs {
  @TypeGraphQL.Field(() => RedirectWhereUniqueInput, { nullable: false })
  where!: RedirectWhereUniqueInput;
}
