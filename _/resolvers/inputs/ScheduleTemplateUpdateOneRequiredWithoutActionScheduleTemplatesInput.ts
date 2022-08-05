import * as TypeGraphQL from "type-graphql-v2-fork";
import { ScheduleTemplateCreateOrConnectWithoutActionScheduleTemplatesInput } from "../inputs/ScheduleTemplateCreateOrConnectWithoutActionScheduleTemplatesInput";
import { ScheduleTemplateCreateWithoutActionScheduleTemplatesInput } from "../inputs/ScheduleTemplateCreateWithoutActionScheduleTemplatesInput";
import { ScheduleTemplateUpdateWithoutActionScheduleTemplatesInput } from "../inputs/ScheduleTemplateUpdateWithoutActionScheduleTemplatesInput";
import { ScheduleTemplateUpsertWithoutActionScheduleTemplatesInput } from "../inputs/ScheduleTemplateUpsertWithoutActionScheduleTemplatesInput";
import { ScheduleTemplateWhereUniqueInput } from "../inputs/ScheduleTemplateWhereUniqueInput";

@TypeGraphQL.InputType("ScheduleTemplateUpdateOneRequiredWithoutActionScheduleTemplatesInput", {
  isAbstract: true,
})
export class ScheduleTemplateUpdateOneRequiredWithoutActionScheduleTemplatesInput {
  @TypeGraphQL.Field(() => ScheduleTemplateCreateWithoutActionScheduleTemplatesInput, {
    nullable: true,
  })
  create?: ScheduleTemplateCreateWithoutActionScheduleTemplatesInput | undefined;

  @TypeGraphQL.Field(() => ScheduleTemplateCreateOrConnectWithoutActionScheduleTemplatesInput, {
    nullable: true,
  })
  connectOrCreate?: ScheduleTemplateCreateOrConnectWithoutActionScheduleTemplatesInput | undefined;

  @TypeGraphQL.Field(() => ScheduleTemplateUpsertWithoutActionScheduleTemplatesInput, {
    nullable: true,
  })
  upsert?: ScheduleTemplateUpsertWithoutActionScheduleTemplatesInput | undefined;

  @TypeGraphQL.Field(() => ScheduleTemplateWhereUniqueInput, { nullable: true })
  connect?: ScheduleTemplateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => ScheduleTemplateUpdateWithoutActionScheduleTemplatesInput, {
    nullable: true,
  })
  update?: ScheduleTemplateUpdateWithoutActionScheduleTemplatesInput | undefined;
}
