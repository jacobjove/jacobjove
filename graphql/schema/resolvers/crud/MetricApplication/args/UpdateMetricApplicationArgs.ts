import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationUpdateInput } from "../../../inputs/MetricApplicationUpdateInput";
import { MetricApplicationWhereUniqueInput } from "../../../inputs/MetricApplicationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMetricApplicationArgs {
  @TypeGraphQL.Field(() => MetricApplicationUpdateInput, { nullable: false })
  data!: MetricApplicationUpdateInput;

  @TypeGraphQL.Field(() => MetricApplicationWhereUniqueInput, { nullable: false })
  where!: MetricApplicationWhereUniqueInput;
}
