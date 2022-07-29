import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityCreateManyInput } from "../../../inputs/IdentityCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyIdentityArgs {
  @TypeGraphQL.Field(() => [IdentityCreateManyInput], { nullable: false })
  data!: IdentityCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
