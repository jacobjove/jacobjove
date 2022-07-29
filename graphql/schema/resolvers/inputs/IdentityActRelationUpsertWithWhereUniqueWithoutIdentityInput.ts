import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationCreateInput } from "../inputs/IdentityActRelationCreateInput";
import { IdentityActRelationUpdateInput } from "../inputs/IdentityActRelationUpdateInput";
import { IdentityActRelationWhereUniqueInput } from "../inputs/IdentityActRelationWhereUniqueInput";

@TypeGraphQL.InputType("IdentityActRelationUpsertWithWhereUniqueWithoutIdentityInput", {
  isAbstract: true,
})
export class IdentityActRelationUpsertWithWhereUniqueWithoutIdentityInput {
  @TypeGraphQL.Field(() => IdentityActRelationWhereUniqueInput, { nullable: false })
  where!: IdentityActRelationWhereUniqueInput;

  @TypeGraphQL.Field(() => IdentityActRelationUpdateInput, { nullable: false })
  update!: IdentityActRelationUpdateInput;

  @TypeGraphQL.Field(() => IdentityActRelationCreateInput, { nullable: false })
  create!: IdentityActRelationCreateInput;
}
