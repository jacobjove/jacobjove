import * as TypeGraphQL from "type-graphql";
import { HabitScalarFieldEnum } from "../../../../enums/HabitScalarFieldEnum";
import { HabitOrderByWithAggregationInput } from "../../../inputs/HabitOrderByWithAggregationInput";
import { HabitScalarWhereWithAggregatesInput } from "../../../inputs/HabitScalarWhereWithAggregatesInput";
import { HabitWhereInput } from "../../../inputs/HabitWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByHabitArgs {
  @TypeGraphQL.Field((_type) => HabitWhereInput, {
    nullable: true,
  })
  where?: HabitWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [HabitOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: HabitOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [HabitScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "actId"
    | "userId"
    | "name"
    | "isPublic"
    | "defaultDurationInMinutes"
    | "createdAt"
    | "updatedAt"
    | "archivedAt"
  >;

  @TypeGraphQL.Field((_type) => HabitScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: HabitScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
