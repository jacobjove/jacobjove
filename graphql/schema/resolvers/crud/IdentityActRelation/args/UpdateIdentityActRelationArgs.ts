import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationUpdateInput } from "../../../inputs/IdentityActRelationUpdateInput";
import { IdentityActRelationWhereUniqueInput } from "../../../inputs/IdentityActRelationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateIdentityActRelationArgs {
  @TypeGraphQL.Field((_type) => IdentityActRelationUpdateInput, { nullable: false })
  data!: IdentityActRelationUpdateInput;

  @TypeGraphQL.Field((_type) => IdentityActRelationWhereUniqueInput, { nullable: false })
  where!: IdentityActRelationWhereUniqueInput;
}
