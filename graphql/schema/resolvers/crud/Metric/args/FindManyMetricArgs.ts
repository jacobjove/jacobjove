import * as TypeGraphQL from "type-graphql";
import { MetricScalarFieldEnum } from "../../../../enums/MetricScalarFieldEnum";
import { MetricOrderByWithRelationInput } from "../../../inputs/MetricOrderByWithRelationInput";
import { MetricWhereInput } from "../../../inputs/MetricWhereInput";
import { MetricWhereUniqueInput } from "../../../inputs/MetricWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindManyMetricArgs {
  @TypeGraphQL.Field((_type) => MetricWhereInput, {
    nullable: true,
  })
  where?: MetricWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [MetricOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: MetricOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => MetricWhereUniqueInput, {
    nullable: true,
  })
  cursor?: MetricWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [MetricScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<"id" | "name"> | undefined;
}
