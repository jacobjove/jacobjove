import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordWhereInput } from "../inputs/MetricRecordWhereInput";

@TypeGraphQL.InputType("MetricRecordListRelationFilter", {
  isAbstract: true,
})
export class MetricRecordListRelationFilter {
  @TypeGraphQL.Field(() => MetricRecordWhereInput, { nullable: true })
  every?: MetricRecordWhereInput | undefined;

  @TypeGraphQL.Field(() => MetricRecordWhereInput, { nullable: true })
  some?: MetricRecordWhereInput | undefined;

  @TypeGraphQL.Field(() => MetricRecordWhereInput, { nullable: true })
  none?: MetricRecordWhereInput | undefined;
}
