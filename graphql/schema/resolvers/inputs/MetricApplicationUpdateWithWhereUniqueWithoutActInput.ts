import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationUpdateWithoutActInput } from "../inputs/MetricApplicationUpdateWithoutActInput";
import { MetricApplicationWhereUniqueInput } from "../inputs/MetricApplicationWhereUniqueInput";

@TypeGraphQL.InputType("MetricApplicationUpdateWithWhereUniqueWithoutActInput", {
  isAbstract: true,
})
export class MetricApplicationUpdateWithWhereUniqueWithoutActInput {
  @TypeGraphQL.Field((_type) => MetricApplicationWhereUniqueInput, { nullable: false })
  where!: MetricApplicationWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MetricApplicationUpdateWithoutActInput, { nullable: false })
  data!: MetricApplicationUpdateWithoutActInput;
}
