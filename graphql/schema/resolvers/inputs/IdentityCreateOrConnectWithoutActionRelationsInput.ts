import * as TypeGraphQL from "type-graphql";
import { IdentityCreateWithoutActionRelationsInput } from "../inputs/IdentityCreateWithoutActionRelationsInput";
import { IdentityWhereUniqueInput } from "../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.InputType("IdentityCreateOrConnectWithoutActionRelationsInput", {
  isAbstract: true,
})
export class IdentityCreateOrConnectWithoutActionRelationsInput {
  @TypeGraphQL.Field((_type) => IdentityWhereUniqueInput, {
    nullable: false,
  })
  where!: IdentityWhereUniqueInput;

  @TypeGraphQL.Field((_type) => IdentityCreateWithoutActionRelationsInput, {
    nullable: false,
  })
  create!: IdentityCreateWithoutActionRelationsInput;
}
