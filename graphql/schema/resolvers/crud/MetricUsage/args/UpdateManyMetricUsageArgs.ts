import * as TypeGraphQL from "type-graphql";
import { MetricUsageUpdateManyMutationInput } from "../../../inputs/MetricUsageUpdateManyMutationInput";
import { MetricUsageWhereInput } from "../../../inputs/MetricUsageWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMetricUsageArgs {
  @TypeGraphQL.Field((_type) => MetricUsageUpdateManyMutationInput, {
    nullable: false,
  })
  data!: MetricUsageUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => MetricUsageWhereInput, {
    nullable: true,
  })
  where?: MetricUsageWhereInput | undefined;
}
