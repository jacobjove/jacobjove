import * as TypeGraphQL from "type-graphql-v2-fork";
import { EnumFREQUENCYWithAggregatesFilter } from "../inputs/EnumFREQUENCYWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ScheduleTemplateScalarWhereWithAggregatesInput", { isAbstract: true })
export class ScheduleTemplateScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [ScheduleTemplateScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: ScheduleTemplateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [ScheduleTemplateScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: ScheduleTemplateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [ScheduleTemplateScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: ScheduleTemplateScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => EnumFREQUENCYWithAggregatesFilter, { nullable: true })
  frequency?: EnumFREQUENCYWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  multiplier?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  chron?: StringNullableWithAggregatesFilter | undefined;
}
