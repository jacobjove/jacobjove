import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateCreateOrConnectWithoutActionSchedulesInput } from "../inputs/ActionScheduleTemplateCreateOrConnectWithoutActionSchedulesInput";
import { ActionScheduleTemplateCreateWithoutActionSchedulesInput } from "../inputs/ActionScheduleTemplateCreateWithoutActionSchedulesInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateCreateNestedOneWithoutActionSchedulesInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateCreateNestedOneWithoutActionSchedulesInput {
  @TypeGraphQL.Field(() => ActionScheduleTemplateCreateWithoutActionSchedulesInput, {
    nullable: true,
  })
  create?: ActionScheduleTemplateCreateWithoutActionSchedulesInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateCreateOrConnectWithoutActionSchedulesInput, {
    nullable: true,
  })
  connectOrCreate?: ActionScheduleTemplateCreateOrConnectWithoutActionSchedulesInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateWhereUniqueInput, { nullable: true })
  connect?: ActionScheduleTemplateWhereUniqueInput | undefined;
}
