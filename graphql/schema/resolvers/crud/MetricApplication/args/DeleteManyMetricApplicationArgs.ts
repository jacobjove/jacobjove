import * as TypeGraphQL from "type-graphql";
import { MetricApplicationWhereInput } from "../../../inputs/MetricApplicationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMetricApplicationArgs {
  @TypeGraphQL.Field((_type) => MetricApplicationWhereInput, {
    nullable: true,
  })
  where?: MetricApplicationWhereInput | undefined;
}
