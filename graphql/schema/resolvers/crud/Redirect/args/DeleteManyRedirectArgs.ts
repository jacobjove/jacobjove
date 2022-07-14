import * as TypeGraphQL from "type-graphql";
import { RedirectWhereInput } from "../../../inputs/RedirectWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyRedirectArgs {
  @TypeGraphQL.Field((_type) => RedirectWhereInput, {
    nullable: true,
  })
  where?: RedirectWhereInput | undefined;
}
