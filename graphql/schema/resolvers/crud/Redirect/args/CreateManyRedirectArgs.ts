import * as TypeGraphQL from "type-graphql-v2-fork";
import { RedirectCreateManyInput } from "../../../inputs/RedirectCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyRedirectArgs {
  @TypeGraphQL.Field(() => [RedirectCreateManyInput], { nullable: false })
  data!: RedirectCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
