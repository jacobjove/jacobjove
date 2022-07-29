import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUpdateInput } from "../../../inputs/MetricUpdateInput";
import { MetricWhereUniqueInput } from "../../../inputs/MetricWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMetricArgs {
  @TypeGraphQL.Field((_type) => MetricUpdateInput, { nullable: false })
  data!: MetricUpdateInput;

  @TypeGraphQL.Field((_type) => MetricWhereUniqueInput, { nullable: false })
  where!: MetricWhereUniqueInput;
}
