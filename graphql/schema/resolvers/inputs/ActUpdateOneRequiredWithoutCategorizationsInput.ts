import * as TypeGraphQL from "type-graphql";
import { ActCreateOrConnectWithoutCategorizationsInput } from "../inputs/ActCreateOrConnectWithoutCategorizationsInput";
import { ActCreateWithoutCategorizationsInput } from "../inputs/ActCreateWithoutCategorizationsInput";
import { ActUpdateWithoutCategorizationsInput } from "../inputs/ActUpdateWithoutCategorizationsInput";
import { ActUpsertWithoutCategorizationsInput } from "../inputs/ActUpsertWithoutCategorizationsInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActUpdateOneRequiredWithoutCategorizationsInput", {
  isAbstract: true,
})
export class ActUpdateOneRequiredWithoutCategorizationsInput {
  @TypeGraphQL.Field((_type) => ActCreateWithoutCategorizationsInput, {
    nullable: true,
  })
  create?: ActCreateWithoutCategorizationsInput | undefined;

  @TypeGraphQL.Field((_type) => ActCreateOrConnectWithoutCategorizationsInput, {
    nullable: true,
  })
  connectOrCreate?: ActCreateOrConnectWithoutCategorizationsInput | undefined;

  @TypeGraphQL.Field((_type) => ActUpsertWithoutCategorizationsInput, {
    nullable: true,
  })
  upsert?: ActUpsertWithoutCategorizationsInput | undefined;

  @TypeGraphQL.Field((_type) => ActWhereUniqueInput, {
    nullable: true,
  })
  connect?: ActWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => ActUpdateWithoutCategorizationsInput, {
    nullable: true,
  })
  update?: ActUpdateWithoutCategorizationsInput | undefined;
}
