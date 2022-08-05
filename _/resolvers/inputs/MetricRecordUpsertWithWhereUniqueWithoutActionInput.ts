import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordCreateWithoutActionInput } from "../inputs/MetricRecordCreateWithoutActionInput";
import { MetricRecordUpdateWithoutActionInput } from "../inputs/MetricRecordUpdateWithoutActionInput";
import { MetricRecordWhereUniqueInput } from "../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.InputType("MetricRecordUpsertWithWhereUniqueWithoutActionInput", { isAbstract: true })
export class MetricRecordUpsertWithWhereUniqueWithoutActionInput {
  @TypeGraphQL.Field(() => MetricRecordWhereUniqueInput, { nullable: false })
  where!: MetricRecordWhereUniqueInput;

  @TypeGraphQL.Field(() => MetricRecordUpdateWithoutActionInput, { nullable: false })
  update!: MetricRecordUpdateWithoutActionInput;

  @TypeGraphQL.Field(() => MetricRecordCreateWithoutActionInput, { nullable: false })
  create!: MetricRecordCreateWithoutActionInput;
}
