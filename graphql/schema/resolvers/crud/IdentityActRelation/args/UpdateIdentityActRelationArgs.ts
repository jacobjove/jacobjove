import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationUpdateInput } from "../../../inputs/IdentityActRelationUpdateInput";
import { IdentityActRelationWhereUniqueInput } from "../../../inputs/IdentityActRelationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateIdentityActRelationArgs {
  @TypeGraphQL.Field(() => IdentityActRelationUpdateInput, { nullable: false })
  data!: IdentityActRelationUpdateInput;

  @TypeGraphQL.Field(() => IdentityActRelationWhereUniqueInput, { nullable: false })
  where!: IdentityActRelationWhereUniqueInput;
}
