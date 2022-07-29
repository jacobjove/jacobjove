import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityCreateOrConnectWithoutActionRelationsInput } from "../inputs/IdentityCreateOrConnectWithoutActionRelationsInput";
import { IdentityCreateWithoutActionRelationsInput } from "../inputs/IdentityCreateWithoutActionRelationsInput";
import { IdentityUpdateWithoutActionRelationsInput } from "../inputs/IdentityUpdateWithoutActionRelationsInput";
import { IdentityUpsertWithoutActionRelationsInput } from "../inputs/IdentityUpsertWithoutActionRelationsInput";
import { IdentityWhereUniqueInput } from "../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.InputType("IdentityUpdateOneRequiredWithoutActionRelationsInput", {
  isAbstract: true,
})
export class IdentityUpdateOneRequiredWithoutActionRelationsInput {
  @TypeGraphQL.Field((_type) => IdentityCreateWithoutActionRelationsInput, { nullable: true })
  create?: IdentityCreateWithoutActionRelationsInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityCreateOrConnectWithoutActionRelationsInput, {
    nullable: true,
  })
  connectOrCreate?: IdentityCreateOrConnectWithoutActionRelationsInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityUpsertWithoutActionRelationsInput, { nullable: true })
  upsert?: IdentityUpsertWithoutActionRelationsInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityWhereUniqueInput, { nullable: true })
  connect?: IdentityWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => IdentityUpdateWithoutActionRelationsInput, { nullable: true })
  update?: IdentityUpdateWithoutActionRelationsInput | undefined;
}
