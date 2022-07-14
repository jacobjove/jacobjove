import * as TypeGraphQL from "type-graphql";
import { MetricApplicationListRelationFilter } from "../inputs/MetricApplicationListRelationFilter";
import { MetricUsageListRelationFilter } from "../inputs/MetricUsageListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("MetricWhereInput", {
  isAbstract: true,
})
export class MetricWhereInput {
  @TypeGraphQL.Field((_type) => [MetricWhereInput], {
    nullable: true,
  })
  AND?: MetricWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricWhereInput], {
    nullable: true,
  })
  OR?: MetricWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricWhereInput], {
    nullable: true,
  })
  NOT?: MetricWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => MetricApplicationListRelationFilter, {
    nullable: true,
  })
  applications?: MetricApplicationListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageListRelationFilter, {
    nullable: true,
  })
  usages?: MetricUsageListRelationFilter | undefined;
}
