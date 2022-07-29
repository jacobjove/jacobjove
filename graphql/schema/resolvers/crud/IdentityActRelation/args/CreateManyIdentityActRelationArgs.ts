import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationCreateManyInput } from "../../../inputs/IdentityActRelationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyIdentityActRelationArgs {
  @TypeGraphQL.Field((_type) => [IdentityActRelationCreateManyInput], { nullable: false })
  data!: IdentityActRelationCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
