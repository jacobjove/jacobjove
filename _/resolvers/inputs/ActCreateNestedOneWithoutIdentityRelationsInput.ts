import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateOrConnectWithoutIdentityRelationsInput } from "../inputs/ActCreateOrConnectWithoutIdentityRelationsInput";
import { ActCreateWithoutIdentityRelationsInput } from "../inputs/ActCreateWithoutIdentityRelationsInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActCreateNestedOneWithoutIdentityRelationsInput", { isAbstract: true })
export class ActCreateNestedOneWithoutIdentityRelationsInput {
  @TypeGraphQL.Field(() => ActCreateWithoutIdentityRelationsInput, { nullable: true })
  create?: ActCreateWithoutIdentityRelationsInput | undefined;

  @TypeGraphQL.Field(() => ActCreateOrConnectWithoutIdentityRelationsInput, { nullable: true })
  connectOrCreate?: ActCreateOrConnectWithoutIdentityRelationsInput | undefined;

  @TypeGraphQL.Field(() => ActWhereUniqueInput, { nullable: true })
  connect?: ActWhereUniqueInput | undefined;
}
