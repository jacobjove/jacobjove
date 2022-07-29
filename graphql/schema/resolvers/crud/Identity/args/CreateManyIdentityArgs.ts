import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityCreateManyInput } from "../../../inputs/IdentityCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyIdentityArgs {
  @TypeGraphQL.Field((_type) => [IdentityCreateManyInput], { nullable: false })
  data!: IdentityCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
