import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateUpdateManyWithoutScheduleTemplateInput } from "../inputs/ActionScheduleTemplateUpdateManyWithoutScheduleTemplateInput";
import { EnumFREQUENCYFieldUpdateOperationsInput } from "../inputs/EnumFREQUENCYFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ScheduleTemplateUpdateInput", { isAbstract: true })
export class ScheduleTemplateUpdateInput {
  @TypeGraphQL.Field(() => EnumFREQUENCYFieldUpdateOperationsInput, { nullable: true })
  frequency?: EnumFREQUENCYFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  multiplier?: number | undefined;

  @TypeGraphQL.Field({ nullable: true })
  chron?: string | null | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateUpdateManyWithoutScheduleTemplateInput, {
    nullable: true,
  })
  actionScheduleTemplates?:
    | ActionScheduleTemplateUpdateManyWithoutScheduleTemplateInput
    | undefined;
}
