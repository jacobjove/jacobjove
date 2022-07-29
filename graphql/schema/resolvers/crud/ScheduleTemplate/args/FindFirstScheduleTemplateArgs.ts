import * as TypeGraphQL from "type-graphql-v2-fork";
import { ScheduleTemplateScalarFieldEnum } from "../../../../enums/ScheduleTemplateScalarFieldEnum";
import { ScheduleTemplateOrderByWithRelationInput } from "../../../inputs/ScheduleTemplateOrderByWithRelationInput";
import { ScheduleTemplateWhereInput } from "../../../inputs/ScheduleTemplateWhereInput";
import { ScheduleTemplateWhereUniqueInput } from "../../../inputs/ScheduleTemplateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindFirstScheduleTemplateArgs {
  @TypeGraphQL.Field((_type) => ScheduleTemplateWhereInput, { nullable: true })
  where?: ScheduleTemplateWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ScheduleTemplateOrderByWithRelationInput], { nullable: true })
  orderBy?: ScheduleTemplateOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => ScheduleTemplateWhereUniqueInput, { nullable: true })
  cursor?: ScheduleTemplateWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [ScheduleTemplateScalarFieldEnum], { nullable: true })
  distinct?: Array<"id" | "frequency" | "multiplier" | "chron"> | undefined;
}
