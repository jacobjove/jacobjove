import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityCreateOrConnectWithoutActionRelationsInput } from "../inputs/IdentityCreateOrConnectWithoutActionRelationsInput";
import { IdentityCreateWithoutActionRelationsInput } from "../inputs/IdentityCreateWithoutActionRelationsInput";
import { IdentityWhereUniqueInput } from "../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.InputType("IdentityCreateNestedOneWithoutActionRelationsInput", {
  isAbstract: true,
})
export class IdentityCreateNestedOneWithoutActionRelationsInput {
  @TypeGraphQL.Field((_type) => IdentityCreateWithoutActionRelationsInput, { nullable: true })
  create?: IdentityCreateWithoutActionRelationsInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityCreateOrConnectWithoutActionRelationsInput, {
    nullable: true,
  })
  connectOrCreate?: IdentityCreateOrConnectWithoutActionRelationsInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityWhereUniqueInput, { nullable: true })
  connect?: IdentityWhereUniqueInput | undefined;
}
