import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationUpdateManyMutationInput } from "../../../inputs/MetricApplicationUpdateManyMutationInput";
import { MetricApplicationWhereInput } from "../../../inputs/MetricApplicationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMetricApplicationArgs {
  @TypeGraphQL.Field((_type) => MetricApplicationUpdateManyMutationInput, { nullable: false })
  data!: MetricApplicationUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => MetricApplicationWhereInput, { nullable: true })
  where?: MetricApplicationWhereInput | undefined;
}
