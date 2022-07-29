import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageWhereInput } from "../../../inputs/MetricUsageWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMetricUsageArgs {
  @TypeGraphQL.Field(() => MetricUsageWhereInput, { nullable: true })
  where?: MetricUsageWhereInput | undefined;
}
