import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityCreateOrConnectWithoutActionRelationsInput } from "../inputs/IdentityCreateOrConnectWithoutActionRelationsInput";
import { IdentityCreateWithoutActionRelationsInput } from "../inputs/IdentityCreateWithoutActionRelationsInput";
import { IdentityWhereUniqueInput } from "../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.InputType("IdentityCreateNestedOneWithoutActionRelationsInput", { isAbstract: true })
export class IdentityCreateNestedOneWithoutActionRelationsInput {
  @TypeGraphQL.Field(() => IdentityCreateWithoutActionRelationsInput, { nullable: true })
  create?: IdentityCreateWithoutActionRelationsInput | undefined;

  @TypeGraphQL.Field(() => IdentityCreateOrConnectWithoutActionRelationsInput, {
    nullable: true,
  })
  connectOrCreate?: IdentityCreateOrConnectWithoutActionRelationsInput | undefined;

  @TypeGraphQL.Field(() => IdentityWhereUniqueInput, { nullable: true })
  connect?: IdentityWhereUniqueInput | undefined;
}
