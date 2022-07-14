import * as TypeGraphQL from "type-graphql";
import { MetricRecordUpdateWithoutActionInput } from "../inputs/MetricRecordUpdateWithoutActionInput";
import { MetricRecordWhereUniqueInput } from "../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.InputType("MetricRecordUpdateWithWhereUniqueWithoutActionInput", {
  isAbstract: true,
})
export class MetricRecordUpdateWithWhereUniqueWithoutActionInput {
  @TypeGraphQL.Field((_type) => MetricRecordWhereUniqueInput, {
    nullable: false,
  })
  where!: MetricRecordWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MetricRecordUpdateWithoutActionInput, {
    nullable: false,
  })
  data!: MetricRecordUpdateWithoutActionInput;
}
