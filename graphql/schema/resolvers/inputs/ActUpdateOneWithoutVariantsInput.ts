import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateOrConnectWithoutVariantsInput } from "../inputs/ActCreateOrConnectWithoutVariantsInput";
import { ActCreateWithoutVariantsInput } from "../inputs/ActCreateWithoutVariantsInput";
import { ActUpdateWithoutVariantsInput } from "../inputs/ActUpdateWithoutVariantsInput";
import { ActUpsertWithoutVariantsInput } from "../inputs/ActUpsertWithoutVariantsInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActUpdateOneWithoutVariantsInput", {
  isAbstract: true,
})
export class ActUpdateOneWithoutVariantsInput {
  @TypeGraphQL.Field((_type) => ActCreateWithoutVariantsInput, { nullable: true })
  create?: ActCreateWithoutVariantsInput | undefined;

  @TypeGraphQL.Field((_type) => ActCreateOrConnectWithoutVariantsInput, { nullable: true })
  connectOrCreate?: ActCreateOrConnectWithoutVariantsInput | undefined;

  @TypeGraphQL.Field((_type) => ActUpsertWithoutVariantsInput, { nullable: true })
  upsert?: ActUpsertWithoutVariantsInput | undefined;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @TypeGraphQL.Field((_type) => ActWhereUniqueInput, { nullable: true })
  connect?: ActWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => ActUpdateWithoutVariantsInput, { nullable: true })
  update?: ActUpdateWithoutVariantsInput | undefined;
}
