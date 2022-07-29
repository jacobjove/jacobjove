import * as TypeGraphQL from "type-graphql-v2-fork";
import { RedirectCreateManyInput } from "../../../inputs/RedirectCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRedirectArgs {
  @TypeGraphQL.Field((_type) => [RedirectCreateManyInput], { nullable: false })
  data!: RedirectCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
