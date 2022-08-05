import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricWhereInput } from "../inputs/MetricWhereInput";

@TypeGraphQL.InputType("MetricRelationFilter", { isAbstract: true })
export class MetricRelationFilter {
  @TypeGraphQL.Field(() => MetricWhereInput, { nullable: true })
  is?: MetricWhereInput | undefined;

  @TypeGraphQL.Field(() => MetricWhereInput, { nullable: true })
  isNot?: MetricWhereInput | undefined;
}
