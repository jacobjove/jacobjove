import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageWhereInput } from "../inputs/MetricUsageWhereInput";

@TypeGraphQL.InputType("MetricUsageRelationFilter", {
  isAbstract: true,
})
export class MetricUsageRelationFilter {
  @TypeGraphQL.Field(() => MetricUsageWhereInput, { nullable: true })
  is?: MetricUsageWhereInput | undefined;

  @TypeGraphQL.Field(() => MetricUsageWhereInput, { nullable: true })
  isNot?: MetricUsageWhereInput | undefined;
}
