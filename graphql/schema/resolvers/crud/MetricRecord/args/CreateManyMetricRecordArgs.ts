import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordCreateManyInput } from "../../../inputs/MetricRecordCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMetricRecordArgs {
  @TypeGraphQL.Field((_type) => [MetricRecordCreateManyInput], { nullable: false })
  data!: MetricRecordCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
