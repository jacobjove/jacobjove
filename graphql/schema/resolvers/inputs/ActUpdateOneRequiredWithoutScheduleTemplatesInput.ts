import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateOrConnectWithoutScheduleTemplatesInput } from "../inputs/ActCreateOrConnectWithoutScheduleTemplatesInput";
import { ActCreateWithoutScheduleTemplatesInput } from "../inputs/ActCreateWithoutScheduleTemplatesInput";
import { ActUpdateWithoutScheduleTemplatesInput } from "../inputs/ActUpdateWithoutScheduleTemplatesInput";
import { ActUpsertWithoutScheduleTemplatesInput } from "../inputs/ActUpsertWithoutScheduleTemplatesInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActUpdateOneRequiredWithoutScheduleTemplatesInput", {
  isAbstract: true,
})
export class ActUpdateOneRequiredWithoutScheduleTemplatesInput {
  @TypeGraphQL.Field(() => ActCreateWithoutScheduleTemplatesInput, { nullable: true })
  create?: ActCreateWithoutScheduleTemplatesInput | undefined;

  @TypeGraphQL.Field(() => ActCreateOrConnectWithoutScheduleTemplatesInput, { nullable: true })
  connectOrCreate?: ActCreateOrConnectWithoutScheduleTemplatesInput | undefined;

  @TypeGraphQL.Field(() => ActUpsertWithoutScheduleTemplatesInput, { nullable: true })
  upsert?: ActUpsertWithoutScheduleTemplatesInput | undefined;

  @TypeGraphQL.Field(() => ActWhereUniqueInput, { nullable: true })
  connect?: ActWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => ActUpdateWithoutScheduleTemplatesInput, { nullable: true })
  update?: ActUpdateWithoutScheduleTemplatesInput | undefined;
}
