import * as TypeGraphQL from "type-graphql";
import { MetricRecordWhereInput } from "../inputs/MetricRecordWhereInput";

@TypeGraphQL.InputType("MetricRecordListRelationFilter", {
  isAbstract: true,
})
export class MetricRecordListRelationFilter {
  @TypeGraphQL.Field((_type) => MetricRecordWhereInput, {
    nullable: true,
  })
  every?: MetricRecordWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordWhereInput, {
    nullable: true,
  })
  some?: MetricRecordWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordWhereInput, {
    nullable: true,
  })
  none?: MetricRecordWhereInput | undefined;
}
