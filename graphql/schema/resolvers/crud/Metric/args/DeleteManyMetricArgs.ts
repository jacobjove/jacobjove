import * as TypeGraphQL from "type-graphql";
import { MetricWhereInput } from "../../../inputs/MetricWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMetricArgs {
  @TypeGraphQL.Field((_type) => MetricWhereInput, {
    nullable: true,
  })
  where?: MetricWhereInput | undefined;
}
