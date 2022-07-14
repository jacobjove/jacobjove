import * as TypeGraphQL from "type-graphql";
import { ScheduleTemplateCreateOrConnectWithoutActionScheduleTemplatesInput } from "../inputs/ScheduleTemplateCreateOrConnectWithoutActionScheduleTemplatesInput";
import { ScheduleTemplateCreateWithoutActionScheduleTemplatesInput } from "../inputs/ScheduleTemplateCreateWithoutActionScheduleTemplatesInput";
import { ScheduleTemplateWhereUniqueInput } from "../inputs/ScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ScheduleTemplateCreateNestedOneWithoutActionScheduleTemplatesInput", {
  isAbstract: true,
})
export class ScheduleTemplateCreateNestedOneWithoutActionScheduleTemplatesInput {
  @TypeGraphQL.Field((_type) => ScheduleTemplateCreateWithoutActionScheduleTemplatesInput, {
    nullable: true,
  })
  create?: ScheduleTemplateCreateWithoutActionScheduleTemplatesInput | undefined;

  @TypeGraphQL.Field(
    (_type) => ScheduleTemplateCreateOrConnectWithoutActionScheduleTemplatesInput,
    {
      nullable: true,
    }
  )
  connectOrCreate?: ScheduleTemplateCreateOrConnectWithoutActionScheduleTemplatesInput | undefined;

  @TypeGraphQL.Field((_type) => ScheduleTemplateWhereUniqueInput, {
    nullable: true,
  })
  connect?: ScheduleTemplateWhereUniqueInput | undefined;
}
