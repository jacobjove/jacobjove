import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationCreateWithoutActInput } from "../inputs/MetricApplicationCreateWithoutActInput";
import { MetricApplicationUpdateWithoutActInput } from "../inputs/MetricApplicationUpdateWithoutActInput";
import { MetricApplicationWhereUniqueInput } from "../inputs/MetricApplicationWhereUniqueInput";

@TypeGraphQL.InputType("MetricApplicationUpsertWithWhereUniqueWithoutActInput", {
  isAbstract: true,
})
export class MetricApplicationUpsertWithWhereUniqueWithoutActInput {
  @TypeGraphQL.Field((_type) => MetricApplicationWhereUniqueInput, { nullable: false })
  where!: MetricApplicationWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MetricApplicationUpdateWithoutActInput, { nullable: false })
  update!: MetricApplicationUpdateWithoutActInput;

  @TypeGraphQL.Field((_type) => MetricApplicationCreateWithoutActInput, { nullable: false })
  create!: MetricApplicationCreateWithoutActInput;
}
