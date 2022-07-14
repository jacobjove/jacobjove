import * as TypeGraphQL from "type-graphql";
import { IdentityActRelationUpdateWithoutActionInput } from "../inputs/IdentityActRelationUpdateWithoutActionInput";
import { IdentityActRelationWhereUniqueInput } from "../inputs/IdentityActRelationWhereUniqueInput";

@TypeGraphQL.InputType("IdentityActRelationUpdateWithWhereUniqueWithoutActionInput", {
  isAbstract: true,
})
export class IdentityActRelationUpdateWithWhereUniqueWithoutActionInput {
  @TypeGraphQL.Field((_type) => IdentityActRelationWhereUniqueInput, {
    nullable: false,
  })
  where!: IdentityActRelationWhereUniqueInput;

  @TypeGraphQL.Field((_type) => IdentityActRelationUpdateWithoutActionInput, {
    nullable: false,
  })
  data!: IdentityActRelationUpdateWithoutActionInput;
}
