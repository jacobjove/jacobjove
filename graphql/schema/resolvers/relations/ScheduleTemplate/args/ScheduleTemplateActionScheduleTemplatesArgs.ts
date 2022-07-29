import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateScalarFieldEnum } from "../../../../enums/ActionScheduleTemplateScalarFieldEnum";
import { ActionScheduleTemplateOrderByWithRelationInput } from "../../../inputs/ActionScheduleTemplateOrderByWithRelationInput";
import { ActionScheduleTemplateWhereInput } from "../../../inputs/ActionScheduleTemplateWhereInput";
import { ActionScheduleTemplateWhereUniqueInput } from "../../../inputs/ActionScheduleTemplateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class ScheduleTemplateActionScheduleTemplatesArgs {
  @TypeGraphQL.Field(() => ActionScheduleTemplateWhereInput, { nullable: true })
  where?: ActionScheduleTemplateWhereInput | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleTemplateOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: ActionScheduleTemplateOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateWhereUniqueInput, { nullable: true })
  cursor?: ActionScheduleTemplateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleTemplateScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<"id" | "actId" | "scheduleTemplateId" | "frequency" | "multiplier" | "quantity">
    | undefined;
}
