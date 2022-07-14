import * as TypeGraphQL from "type-graphql";
import { MetricRecordUpdateManyMutationInput } from "../../../inputs/MetricRecordUpdateManyMutationInput";
import { MetricRecordWhereInput } from "../../../inputs/MetricRecordWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMetricRecordArgs {
  @TypeGraphQL.Field((_type) => MetricRecordUpdateManyMutationInput, {
    nullable: false,
  })
  data!: MetricRecordUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => MetricRecordWhereInput, {
    nullable: true,
  })
  where?: MetricRecordWhereInput | undefined;
}
