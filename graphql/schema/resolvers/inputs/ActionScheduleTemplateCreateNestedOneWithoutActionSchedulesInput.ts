import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateCreateOrConnectWithoutActionSchedulesInput } from "../inputs/ActionScheduleTemplateCreateOrConnectWithoutActionSchedulesInput";
import { ActionScheduleTemplateCreateWithoutActionSchedulesInput } from "../inputs/ActionScheduleTemplateCreateWithoutActionSchedulesInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateCreateNestedOneWithoutActionSchedulesInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateCreateNestedOneWithoutActionSchedulesInput {
  @TypeGraphQL.Field((_type) => ActionScheduleTemplateCreateWithoutActionSchedulesInput, {
    nullable: true,
  })
  create?: ActionScheduleTemplateCreateWithoutActionSchedulesInput | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateCreateOrConnectWithoutActionSchedulesInput, {
    nullable: true,
  })
  connectOrCreate?: ActionScheduleTemplateCreateOrConnectWithoutActionSchedulesInput | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateWhereUniqueInput, { nullable: true })
  connect?: ActionScheduleTemplateWhereUniqueInput | undefined;
}
