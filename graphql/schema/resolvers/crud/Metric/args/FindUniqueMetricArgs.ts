import * as TypeGraphQL from "type-graphql";
import { MetricWhereUniqueInput } from "../../../inputs/MetricWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMetricArgs {
  @TypeGraphQL.Field((_type) => MetricWhereUniqueInput, {
    nullable: false,
  })
  where!: MetricWhereUniqueInput;
}
