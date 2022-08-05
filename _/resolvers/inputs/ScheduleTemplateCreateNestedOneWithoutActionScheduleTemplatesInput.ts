import * as TypeGraphQL from "type-graphql-v2-fork";
import { ScheduleTemplateCreateOrConnectWithoutActionScheduleTemplatesInput } from "../inputs/ScheduleTemplateCreateOrConnectWithoutActionScheduleTemplatesInput";
import { ScheduleTemplateCreateWithoutActionScheduleTemplatesInput } from "../inputs/ScheduleTemplateCreateWithoutActionScheduleTemplatesInput";
import { ScheduleTemplateWhereUniqueInput } from "../inputs/ScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ScheduleTemplateCreateNestedOneWithoutActionScheduleTemplatesInput", {
  isAbstract: true,
})
export class ScheduleTemplateCreateNestedOneWithoutActionScheduleTemplatesInput {
  @TypeGraphQL.Field(() => ScheduleTemplateCreateWithoutActionScheduleTemplatesInput, {
    nullable: true,
  })
  create?: ScheduleTemplateCreateWithoutActionScheduleTemplatesInput | undefined;

  @TypeGraphQL.Field(() => ScheduleTemplateCreateOrConnectWithoutActionScheduleTemplatesInput, {
    nullable: true,
  })
  connectOrCreate?: ScheduleTemplateCreateOrConnectWithoutActionScheduleTemplatesInput | undefined;

  @TypeGraphQL.Field(() => ScheduleTemplateWhereUniqueInput, { nullable: true })
  connect?: ScheduleTemplateWhereUniqueInput | undefined;
}
