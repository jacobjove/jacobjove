import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricWhereUniqueInput } from "../../../inputs/MetricWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMetricArgs {
  @TypeGraphQL.Field((_type) => MetricWhereUniqueInput, { nullable: false })
  where!: MetricWhereUniqueInput;
}
