import * as TypeGraphQL from "type-graphql";
import { MetricApplicationUpdateInput } from "../../../inputs/MetricApplicationUpdateInput";
import { MetricApplicationWhereUniqueInput } from "../../../inputs/MetricApplicationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMetricApplicationArgs {
  @TypeGraphQL.Field((_type) => MetricApplicationUpdateInput, {
    nullable: false,
  })
  data!: MetricApplicationUpdateInput;

  @TypeGraphQL.Field((_type) => MetricApplicationWhereUniqueInput, {
    nullable: false,
  })
  where!: MetricApplicationWhereUniqueInput;
}
