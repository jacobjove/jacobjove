import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageUpdateManyMutationInput } from "../../../inputs/MetricUsageUpdateManyMutationInput";
import { MetricUsageWhereInput } from "../../../inputs/MetricUsageWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMetricUsageArgs {
  @TypeGraphQL.Field(() => MetricUsageUpdateManyMutationInput, { nullable: false })
  data!: MetricUsageUpdateManyMutationInput;

  @TypeGraphQL.Field(() => MetricUsageWhereInput, { nullable: true })
  where?: MetricUsageWhereInput | undefined;
}
