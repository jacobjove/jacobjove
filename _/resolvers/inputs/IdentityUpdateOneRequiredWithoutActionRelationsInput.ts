import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityCreateOrConnectWithoutActionRelationsInput } from "../inputs/IdentityCreateOrConnectWithoutActionRelationsInput";
import { IdentityCreateWithoutActionRelationsInput } from "../inputs/IdentityCreateWithoutActionRelationsInput";
import { IdentityUpdateWithoutActionRelationsInput } from "../inputs/IdentityUpdateWithoutActionRelationsInput";
import { IdentityUpsertWithoutActionRelationsInput } from "../inputs/IdentityUpsertWithoutActionRelationsInput";
import { IdentityWhereUniqueInput } from "../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.InputType("IdentityUpdateOneRequiredWithoutActionRelationsInput", { isAbstract: true })
export class IdentityUpdateOneRequiredWithoutActionRelationsInput {
  @TypeGraphQL.Field(() => IdentityCreateWithoutActionRelationsInput, { nullable: true })
  create?: IdentityCreateWithoutActionRelationsInput | undefined;

  @TypeGraphQL.Field(() => IdentityCreateOrConnectWithoutActionRelationsInput, {
    nullable: true,
  })
  connectOrCreate?: IdentityCreateOrConnectWithoutActionRelationsInput | undefined;

  @TypeGraphQL.Field(() => IdentityUpsertWithoutActionRelationsInput, { nullable: true })
  upsert?: IdentityUpsertWithoutActionRelationsInput | undefined;

  @TypeGraphQL.Field(() => IdentityWhereUniqueInput, { nullable: true })
  connect?: IdentityWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => IdentityUpdateWithoutActionRelationsInput, { nullable: true })
  update?: IdentityUpdateWithoutActionRelationsInput | undefined;
}
