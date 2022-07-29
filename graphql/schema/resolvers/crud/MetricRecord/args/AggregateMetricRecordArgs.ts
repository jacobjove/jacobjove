import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordOrderByWithRelationInput } from "../../../inputs/MetricRecordOrderByWithRelationInput";
import { MetricRecordWhereInput } from "../../../inputs/MetricRecordWhereInput";
import { MetricRecordWhereUniqueInput } from "../../../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMetricRecordArgs {
  @TypeGraphQL.Field((_type) => MetricRecordWhereInput, { nullable: true })
  where?: MetricRecordWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordOrderByWithRelationInput], { nullable: true })
  orderBy?: MetricRecordOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordWhereUniqueInput, { nullable: true })
  cursor?: MetricRecordWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
