import * as TypeGraphQL from "type-graphql";
import { IdentityActRelationCreateInput } from "../../../inputs/IdentityActRelationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateIdentityActRelationArgs {
  @TypeGraphQL.Field((_type) => IdentityActRelationCreateInput, {
    nullable: false,
  })
  data!: IdentityActRelationCreateInput;
}
