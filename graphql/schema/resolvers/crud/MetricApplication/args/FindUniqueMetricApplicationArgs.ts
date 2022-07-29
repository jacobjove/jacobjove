import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationWhereUniqueInput } from "../../../inputs/MetricApplicationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMetricApplicationArgs {
  @TypeGraphQL.Field(() => MetricApplicationWhereUniqueInput, { nullable: false })
  where!: MetricApplicationWhereUniqueInput;
}
