import * as TypeGraphQL from "type-graphql";
import { RedirectUpdateInput } from "../../../inputs/RedirectUpdateInput";
import { RedirectWhereUniqueInput } from "../../../inputs/RedirectWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateRedirectArgs {
  @TypeGraphQL.Field((_type) => RedirectUpdateInput, {
    nullable: false,
  })
  data!: RedirectUpdateInput;

  @TypeGraphQL.Field((_type) => RedirectWhereUniqueInput, {
    nullable: false,
  })
  where!: RedirectWhereUniqueInput;
}
