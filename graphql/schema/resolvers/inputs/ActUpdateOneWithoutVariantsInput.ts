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
  @TypeGraphQL.Field(() => ActCreateWithoutVariantsInput, { nullable: true })
  create?: ActCreateWithoutVariantsInput | undefined;

  @TypeGraphQL.Field(() => ActCreateOrConnectWithoutVariantsInput, { nullable: true })
  connectOrCreate?: ActCreateOrConnectWithoutVariantsInput | undefined;

  @TypeGraphQL.Field(() => ActUpsertWithoutVariantsInput, { nullable: true })
  upsert?: ActUpsertWithoutVariantsInput | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(() => ActWhereUniqueInput, { nullable: true })
  connect?: ActWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => ActUpdateWithoutVariantsInput, { nullable: true })
  update?: ActUpdateWithoutVariantsInput | undefined;
}
