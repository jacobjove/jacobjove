import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationCreateWithoutActInput } from "../inputs/MetricApplicationCreateWithoutActInput";
import { MetricApplicationUpdateWithoutActInput } from "../inputs/MetricApplicationUpdateWithoutActInput";
import { MetricApplicationWhereUniqueInput } from "../inputs/MetricApplicationWhereUniqueInput";

@TypeGraphQL.InputType("MetricApplicationUpsertWithWhereUniqueWithoutActInput", {
  isAbstract: true,
})
export class MetricApplicationUpsertWithWhereUniqueWithoutActInput {
  @TypeGraphQL.Field(() => MetricApplicationWhereUniqueInput, { nullable: false })
  where!: MetricApplicationWhereUniqueInput;

  @TypeGraphQL.Field(() => MetricApplicationUpdateWithoutActInput, { nullable: false })
  update!: MetricApplicationUpdateWithoutActInput;

  @TypeGraphQL.Field(() => MetricApplicationCreateWithoutActInput, { nullable: false })
  create!: MetricApplicationCreateWithoutActInput;
}
