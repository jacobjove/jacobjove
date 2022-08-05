import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateOrConnectWithoutScheduleTemplatesInput } from "../inputs/ActCreateOrConnectWithoutScheduleTemplatesInput";
import { ActCreateWithoutScheduleTemplatesInput } from "../inputs/ActCreateWithoutScheduleTemplatesInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActCreateNestedOneWithoutScheduleTemplatesInput", { isAbstract: true })
export class ActCreateNestedOneWithoutScheduleTemplatesInput {
  @TypeGraphQL.Field(() => ActCreateWithoutScheduleTemplatesInput, { nullable: true })
  create?: ActCreateWithoutScheduleTemplatesInput | undefined;

  @TypeGraphQL.Field(() => ActCreateOrConnectWithoutScheduleTemplatesInput, { nullable: true })
  connectOrCreate?: ActCreateOrConnectWithoutScheduleTemplatesInput | undefined;

  @TypeGraphQL.Field(() => ActWhereUniqueInput, { nullable: true })
  connect?: ActWhereUniqueInput | undefined;
}
