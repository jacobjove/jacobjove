import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationCreateWithoutActionInput } from "../inputs/IdentityActRelationCreateWithoutActionInput";
import { IdentityActRelationUpdateWithoutActionInput } from "../inputs/IdentityActRelationUpdateWithoutActionInput";
import { IdentityActRelationWhereUniqueInput } from "../inputs/IdentityActRelationWhereUniqueInput";

@TypeGraphQL.InputType("IdentityActRelationUpsertWithWhereUniqueWithoutActionInput", {
  isAbstract: true,
})
export class IdentityActRelationUpsertWithWhereUniqueWithoutActionInput {
  @TypeGraphQL.Field(() => IdentityActRelationWhereUniqueInput, { nullable: false })
  where!: IdentityActRelationWhereUniqueInput;

  @TypeGraphQL.Field(() => IdentityActRelationUpdateWithoutActionInput, { nullable: false })
  update!: IdentityActRelationUpdateWithoutActionInput;

  @TypeGraphQL.Field(() => IdentityActRelationCreateWithoutActionInput, { nullable: false })
  create!: IdentityActRelationCreateWithoutActionInput;
}
