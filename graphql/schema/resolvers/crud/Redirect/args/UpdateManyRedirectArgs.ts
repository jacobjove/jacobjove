import * as TypeGraphQL from "type-graphql-v2-fork";
import { RedirectUpdateManyMutationInput } from "../../../inputs/RedirectUpdateManyMutationInput";
import { RedirectWhereInput } from "../../../inputs/RedirectWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRedirectArgs {
  @TypeGraphQL.Field(() => RedirectUpdateManyMutationInput, { nullable: false })
  data!: RedirectUpdateManyMutationInput;

  @TypeGraphQL.Field(() => RedirectWhereInput, { nullable: true })
  where?: RedirectWhereInput | undefined;
}
