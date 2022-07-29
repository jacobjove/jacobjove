import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationCreateInput } from "../../../inputs/MetricApplicationCreateInput";
import { MetricApplicationUpdateInput } from "../../../inputs/MetricApplicationUpdateInput";
import { MetricApplicationWhereUniqueInput } from "../../../inputs/MetricApplicationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMetricApplicationArgs {
  @TypeGraphQL.Field(() => MetricApplicationWhereUniqueInput, { nullable: false })
  where!: MetricApplicationWhereUniqueInput;

  @TypeGraphQL.Field(() => MetricApplicationCreateInput, { nullable: false })
  create!: MetricApplicationCreateInput;

  @TypeGraphQL.Field(() => MetricApplicationUpdateInput, { nullable: false })
  update!: MetricApplicationUpdateInput;
}
