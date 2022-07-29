import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationCreateInput } from "../../../inputs/MetricApplicationCreateInput";
import { MetricApplicationUpdateInput } from "../../../inputs/MetricApplicationUpdateInput";
import { MetricApplicationWhereUniqueInput } from "../../../inputs/MetricApplicationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMetricApplicationArgs {
  @TypeGraphQL.Field((_type) => MetricApplicationWhereUniqueInput, { nullable: false })
  where!: MetricApplicationWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MetricApplicationCreateInput, { nullable: false })
  create!: MetricApplicationCreateInput;

  @TypeGraphQL.Field((_type) => MetricApplicationUpdateInput, { nullable: false })
  update!: MetricApplicationUpdateInput;
}
