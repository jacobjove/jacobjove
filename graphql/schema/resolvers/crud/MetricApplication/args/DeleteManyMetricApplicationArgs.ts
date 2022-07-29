import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationWhereInput } from "../../../inputs/MetricApplicationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMetricApplicationArgs {
  @TypeGraphQL.Field((_type) => MetricApplicationWhereInput, { nullable: true })
  where?: MetricApplicationWhereInput | undefined;
}
