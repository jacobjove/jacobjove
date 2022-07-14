import * as TypeGraphQL from "type-graphql";
import { MetricUsageWhereInput } from "../../../inputs/MetricUsageWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMetricUsageArgs {
  @TypeGraphQL.Field((_type) => MetricUsageWhereInput, {
    nullable: true,
  })
  where?: MetricUsageWhereInput | undefined;
}
