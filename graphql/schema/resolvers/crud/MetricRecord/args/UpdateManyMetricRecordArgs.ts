import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordUpdateManyMutationInput } from "../../../inputs/MetricRecordUpdateManyMutationInput";
import { MetricRecordWhereInput } from "../../../inputs/MetricRecordWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMetricRecordArgs {
  @TypeGraphQL.Field(() => MetricRecordUpdateManyMutationInput, { nullable: false })
  data!: MetricRecordUpdateManyMutationInput;

  @TypeGraphQL.Field(() => MetricRecordWhereInput, { nullable: true })
  where?: MetricRecordWhereInput | undefined;
}
