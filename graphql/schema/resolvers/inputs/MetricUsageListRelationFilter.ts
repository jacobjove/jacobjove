import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageWhereInput } from "../inputs/MetricUsageWhereInput";

@TypeGraphQL.InputType("MetricUsageListRelationFilter", {
  isAbstract: true,
})
export class MetricUsageListRelationFilter {
  @TypeGraphQL.Field(() => MetricUsageWhereInput, { nullable: true })
  every?: MetricUsageWhereInput | undefined;

  @TypeGraphQL.Field(() => MetricUsageWhereInput, { nullable: true })
  some?: MetricUsageWhereInput | undefined;

  @TypeGraphQL.Field(() => MetricUsageWhereInput, { nullable: true })
  none?: MetricUsageWhereInput | undefined;
}
