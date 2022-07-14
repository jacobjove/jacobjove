import * as TypeGraphQL from "type-graphql";
import { MetricRecordWhereUniqueInput } from "../../../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMetricRecordArgs {
  @TypeGraphQL.Field((_type) => MetricRecordWhereUniqueInput, {
    nullable: false,
  })
  where!: MetricRecordWhereUniqueInput;
}
