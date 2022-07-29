import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateCreateOrConnectWithoutActionSchedulesInput } from "../inputs/ActionScheduleTemplateCreateOrConnectWithoutActionSchedulesInput";
import { ActionScheduleTemplateCreateWithoutActionSchedulesInput } from "../inputs/ActionScheduleTemplateCreateWithoutActionSchedulesInput";
import { ActionScheduleTemplateUpdateWithoutActionSchedulesInput } from "../inputs/ActionScheduleTemplateUpdateWithoutActionSchedulesInput";
import { ActionScheduleTemplateUpsertWithoutActionSchedulesInput } from "../inputs/ActionScheduleTemplateUpsertWithoutActionSchedulesInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateUpdateOneWithoutActionSchedulesInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateUpdateOneWithoutActionSchedulesInput {
  @TypeGraphQL.Field((_type) => ActionScheduleTemplateCreateWithoutActionSchedulesInput, {
    nullable: true,
  })
  create?: ActionScheduleTemplateCreateWithoutActionSchedulesInput | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateCreateOrConnectWithoutActionSchedulesInput, {
    nullable: true,
  })
  connectOrCreate?: ActionScheduleTemplateCreateOrConnectWithoutActionSchedulesInput | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateUpsertWithoutActionSchedulesInput, {
    nullable: true,
  })
  upsert?: ActionScheduleTemplateUpsertWithoutActionSchedulesInput | undefined;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateWhereUniqueInput, { nullable: true })
  connect?: ActionScheduleTemplateWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateUpdateWithoutActionSchedulesInput, {
    nullable: true,
  })
  update?: ActionScheduleTemplateUpdateWithoutActionSchedulesInput | undefined;
}
