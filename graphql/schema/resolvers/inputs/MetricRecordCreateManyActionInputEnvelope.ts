import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordCreateManyActionInput } from "../inputs/MetricRecordCreateManyActionInput";

@TypeGraphQL.InputType("MetricRecordCreateManyActionInputEnvelope", {
  isAbstract: true,
})
export class MetricRecordCreateManyActionInputEnvelope {
  @TypeGraphQL.Field((_type) => [MetricRecordCreateManyActionInput], { nullable: false })
  data!: MetricRecordCreateManyActionInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
