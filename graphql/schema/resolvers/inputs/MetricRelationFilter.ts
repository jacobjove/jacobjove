import * as TypeGraphQL from "type-graphql";
import { MetricWhereInput } from "../inputs/MetricWhereInput";

@TypeGraphQL.InputType("MetricRelationFilter", {
  isAbstract: true,
})
export class MetricRelationFilter {
  @TypeGraphQL.Field((_type) => MetricWhereInput, {
    nullable: true,
  })
  is?: MetricWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MetricWhereInput, {
    nullable: true,
  })
  isNot?: MetricWhereInput | undefined;
}
