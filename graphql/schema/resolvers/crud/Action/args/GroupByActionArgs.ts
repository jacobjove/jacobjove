import * as TypeGraphQL from "type-graphql";
import { ActionScalarFieldEnum } from "../../../../enums/ActionScalarFieldEnum";
import { ActionOrderByWithAggregationInput } from "../../../inputs/ActionOrderByWithAggregationInput";
import { ActionScalarWhereWithAggregatesInput } from "../../../inputs/ActionScalarWhereWithAggregatesInput";
import { ActionWhereInput } from "../../../inputs/ActionWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByActionArgs {
  @TypeGraphQL.Field((_type) => ActionWhereInput, {
    nullable: true,
  })
  where?: ActionWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ActionOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: ActionOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    "id" | "habitId" | "start" | "end" | "notes" | "createdAt" | "updatedAt" | "archivedAt"
  >;

  @TypeGraphQL.Field((_type) => ActionScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: ActionScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
