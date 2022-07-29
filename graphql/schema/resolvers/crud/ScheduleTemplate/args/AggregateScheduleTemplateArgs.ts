import * as TypeGraphQL from "type-graphql-v2-fork";
import { ScheduleTemplateOrderByWithRelationInput } from "../../../inputs/ScheduleTemplateOrderByWithRelationInput";
import { ScheduleTemplateWhereInput } from "../../../inputs/ScheduleTemplateWhereInput";
import { ScheduleTemplateWhereUniqueInput } from "../../../inputs/ScheduleTemplateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateScheduleTemplateArgs {
  @TypeGraphQL.Field(() => ScheduleTemplateWhereInput, { nullable: true })
  where?: ScheduleTemplateWhereInput | undefined;

  @TypeGraphQL.Field(() => [ScheduleTemplateOrderByWithRelationInput], { nullable: true })
  orderBy?: ScheduleTemplateOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => ScheduleTemplateWhereUniqueInput, { nullable: true })
  cursor?: ScheduleTemplateWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
