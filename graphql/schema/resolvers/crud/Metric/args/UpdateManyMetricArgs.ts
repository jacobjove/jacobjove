import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUpdateManyMutationInput } from "../../../inputs/MetricUpdateManyMutationInput";
import { MetricWhereInput } from "../../../inputs/MetricWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMetricArgs {
  @TypeGraphQL.Field(() => MetricUpdateManyMutationInput, { nullable: false })
  data!: MetricUpdateManyMutationInput;

  @TypeGraphQL.Field(() => MetricWhereInput, { nullable: true })
  where?: MetricWhereInput | undefined;
}
