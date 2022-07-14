import * as TypeGraphQL from "type-graphql";
import { BeliefScalarFieldEnum } from "../../../../enums/BeliefScalarFieldEnum";
import { BeliefOrderByWithAggregationInput } from "../../../inputs/BeliefOrderByWithAggregationInput";
import { BeliefScalarWhereWithAggregatesInput } from "../../../inputs/BeliefScalarWhereWithAggregatesInput";
import { BeliefWhereInput } from "../../../inputs/BeliefWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByBeliefArgs {
  @TypeGraphQL.Field((_type) => BeliefWhereInput, {
    nullable: true,
  })
  where?: BeliefWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [BeliefOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: BeliefOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BeliefScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "name" | "slug" | "description" | "createdAt" | "updatedAt" | "archivedAt">;

  @TypeGraphQL.Field((_type) => BeliefScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: BeliefScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
