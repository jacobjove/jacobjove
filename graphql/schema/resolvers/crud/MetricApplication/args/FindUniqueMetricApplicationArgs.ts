import * as TypeGraphQL from "type-graphql";
import { MetricApplicationWhereUniqueInput } from "../../../inputs/MetricApplicationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMetricApplicationArgs {
  @TypeGraphQL.Field((_type) => MetricApplicationWhereUniqueInput, {
    nullable: false,
  })
  where!: MetricApplicationWhereUniqueInput;
}
