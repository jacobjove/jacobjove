import * as TypeGraphQL from "type-graphql-v2-fork";
import { RedirectUpdateManyMutationInput } from "../../../inputs/RedirectUpdateManyMutationInput";
import { RedirectWhereInput } from "../../../inputs/RedirectWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyRedirectArgs {
  @TypeGraphQL.Field((_type) => RedirectUpdateManyMutationInput, { nullable: false })
  data!: RedirectUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => RedirectWhereInput, { nullable: true })
  where?: RedirectWhereInput | undefined;
}
