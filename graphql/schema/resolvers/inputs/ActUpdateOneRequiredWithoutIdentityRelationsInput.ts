import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateOrConnectWithoutIdentityRelationsInput } from "../inputs/ActCreateOrConnectWithoutIdentityRelationsInput";
import { ActCreateWithoutIdentityRelationsInput } from "../inputs/ActCreateWithoutIdentityRelationsInput";
import { ActUpdateWithoutIdentityRelationsInput } from "../inputs/ActUpdateWithoutIdentityRelationsInput";
import { ActUpsertWithoutIdentityRelationsInput } from "../inputs/ActUpsertWithoutIdentityRelationsInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActUpdateOneRequiredWithoutIdentityRelationsInput", {
  isAbstract: true,
})
export class ActUpdateOneRequiredWithoutIdentityRelationsInput {
  @TypeGraphQL.Field((_type) => ActCreateWithoutIdentityRelationsInput, { nullable: true })
  create?: ActCreateWithoutIdentityRelationsInput | undefined;

  @TypeGraphQL.Field((_type) => ActCreateOrConnectWithoutIdentityRelationsInput, { nullable: true })
  connectOrCreate?: ActCreateOrConnectWithoutIdentityRelationsInput | undefined;

  @TypeGraphQL.Field((_type) => ActUpsertWithoutIdentityRelationsInput, { nullable: true })
  upsert?: ActUpsertWithoutIdentityRelationsInput | undefined;

  @TypeGraphQL.Field((_type) => ActWhereUniqueInput, { nullable: true })
  connect?: ActWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => ActUpdateWithoutIdentityRelationsInput, { nullable: true })
  update?: ActUpdateWithoutIdentityRelationsInput | undefined;
}
