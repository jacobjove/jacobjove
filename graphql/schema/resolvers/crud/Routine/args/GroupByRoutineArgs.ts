import * as TypeGraphQL from "type-graphql";
import { RoutineScalarFieldEnum } from "../../../../enums/RoutineScalarFieldEnum";
import { RoutineOrderByWithAggregationInput } from "../../../inputs/RoutineOrderByWithAggregationInput";
import { RoutineScalarWhereWithAggregatesInput } from "../../../inputs/RoutineScalarWhereWithAggregatesInput";
import { RoutineWhereInput } from "../../../inputs/RoutineWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByRoutineArgs {
  @TypeGraphQL.Field((_type) => RoutineWhereInput, {
    nullable: true,
  })
  where?: RoutineWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [RoutineOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: RoutineOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RoutineScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "userId"
    | "name"
    | "durationInMinutes"
    | "notes"
    | "createdAt"
    | "updatedAt"
    | "archivedAt"
  >;

  @TypeGraphQL.Field((_type) => RoutineScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: RoutineScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
