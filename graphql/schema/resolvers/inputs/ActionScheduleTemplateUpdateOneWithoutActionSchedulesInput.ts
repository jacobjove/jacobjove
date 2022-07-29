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
  @TypeGraphQL.Field(() => ActionScheduleTemplateCreateWithoutActionSchedulesInput, {
    nullable: true,
  })
  create?: ActionScheduleTemplateCreateWithoutActionSchedulesInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateCreateOrConnectWithoutActionSchedulesInput, {
    nullable: true,
  })
  connectOrCreate?: ActionScheduleTemplateCreateOrConnectWithoutActionSchedulesInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateUpsertWithoutActionSchedulesInput, {
    nullable: true,
  })
  upsert?: ActionScheduleTemplateUpsertWithoutActionSchedulesInput | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateWhereUniqueInput, { nullable: true })
  connect?: ActionScheduleTemplateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateUpdateWithoutActionSchedulesInput, {
    nullable: true,
  })
  update?: ActionScheduleTemplateUpdateWithoutActionSchedulesInput | undefined;
}
