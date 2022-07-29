import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityCreateWithoutActionRelationsInput } from "../inputs/IdentityCreateWithoutActionRelationsInput";
import { IdentityWhereUniqueInput } from "../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.InputType("IdentityCreateOrConnectWithoutActionRelationsInput", {
  isAbstract: true,
})
export class IdentityCreateOrConnectWithoutActionRelationsInput {
  @TypeGraphQL.Field(() => IdentityWhereUniqueInput, { nullable: false })
  where!: IdentityWhereUniqueInput;

  @TypeGraphQL.Field(() => IdentityCreateWithoutActionRelationsInput, { nullable: false })
  create!: IdentityCreateWithoutActionRelationsInput;
}
