import * as TypeGraphQL from "type-graphql";
import { ActCreateOrConnectWithoutIdentityRelationsInput } from "../inputs/ActCreateOrConnectWithoutIdentityRelationsInput";
import { ActCreateWithoutIdentityRelationsInput } from "../inputs/ActCreateWithoutIdentityRelationsInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActCreateNestedOneWithoutIdentityRelationsInput", {
  isAbstract: true,
})
export class ActCreateNestedOneWithoutIdentityRelationsInput {
  @TypeGraphQL.Field((_type) => ActCreateWithoutIdentityRelationsInput, {
    nullable: true,
  })
  create?: ActCreateWithoutIdentityRelationsInput | undefined;

  @TypeGraphQL.Field((_type) => ActCreateOrConnectWithoutIdentityRelationsInput, {
    nullable: true,
  })
  connectOrCreate?: ActCreateOrConnectWithoutIdentityRelationsInput | undefined;

  @TypeGraphQL.Field((_type) => ActWhereUniqueInput, {
    nullable: true,
  })
  connect?: ActWhereUniqueInput | undefined;
}
