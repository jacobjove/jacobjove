import * as TypeGraphQL from "type-graphql";
import { ActCreateOrConnectWithoutScheduleTemplatesInput } from "../inputs/ActCreateOrConnectWithoutScheduleTemplatesInput";
import { ActCreateWithoutScheduleTemplatesInput } from "../inputs/ActCreateWithoutScheduleTemplatesInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActCreateNestedOneWithoutScheduleTemplatesInput", {
  isAbstract: true,
})
export class ActCreateNestedOneWithoutScheduleTemplatesInput {
  @TypeGraphQL.Field((_type) => ActCreateWithoutScheduleTemplatesInput, {
    nullable: true,
  })
  create?: ActCreateWithoutScheduleTemplatesInput | undefined;

  @TypeGraphQL.Field((_type) => ActCreateOrConnectWithoutScheduleTemplatesInput, {
    nullable: true,
  })
  connectOrCreate?: ActCreateOrConnectWithoutScheduleTemplatesInput | undefined;

  @TypeGraphQL.Field((_type) => ActWhereUniqueInput, {
    nullable: true,
  })
  connect?: ActWhereUniqueInput | undefined;
}
