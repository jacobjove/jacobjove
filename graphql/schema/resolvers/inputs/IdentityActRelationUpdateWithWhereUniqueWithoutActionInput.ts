import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationUpdateWithoutActionInput } from "../inputs/IdentityActRelationUpdateWithoutActionInput";
import { IdentityActRelationWhereUniqueInput } from "../inputs/IdentityActRelationWhereUniqueInput";

@TypeGraphQL.InputType("IdentityActRelationUpdateWithWhereUniqueWithoutActionInput", {
  isAbstract: true,
})
export class IdentityActRelationUpdateWithWhereUniqueWithoutActionInput {
  @TypeGraphQL.Field(() => IdentityActRelationWhereUniqueInput, { nullable: false })
  where!: IdentityActRelationWhereUniqueInput;

  @TypeGraphQL.Field(() => IdentityActRelationUpdateWithoutActionInput, { nullable: false })
  data!: IdentityActRelationUpdateWithoutActionInput;
}
