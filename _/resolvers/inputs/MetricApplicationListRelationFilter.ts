import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationWhereInput } from "../inputs/MetricApplicationWhereInput";

@TypeGraphQL.InputType("MetricApplicationListRelationFilter", { isAbstract: true })
export class MetricApplicationListRelationFilter {
  @TypeGraphQL.Field(() => MetricApplicationWhereInput, { nullable: true })
  every?: MetricApplicationWhereInput | undefined;

  @TypeGraphQL.Field(() => MetricApplicationWhereInput, { nullable: true })
  some?: MetricApplicationWhereInput | undefined;

  @TypeGraphQL.Field(() => MetricApplicationWhereInput, { nullable: true })
  none?: MetricApplicationWhereInput | undefined;
}
