import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordUpdateWithoutActionInput } from "../inputs/MetricRecordUpdateWithoutActionInput";
import { MetricRecordWhereUniqueInput } from "../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.InputType("MetricRecordUpdateWithWhereUniqueWithoutActionInput", { isAbstract: true })
export class MetricRecordUpdateWithWhereUniqueWithoutActionInput {
  @TypeGraphQL.Field(() => MetricRecordWhereUniqueInput, { nullable: false })
  where!: MetricRecordWhereUniqueInput;

  @TypeGraphQL.Field(() => MetricRecordUpdateWithoutActionInput, { nullable: false })
  data!: MetricRecordUpdateWithoutActionInput;
}
