import * as TypeGraphQL from "type-graphql";
import { CalendarScalarFieldEnum } from "../../../../enums/CalendarScalarFieldEnum";
import { CalendarOrderByWithAggregationInput } from "../../../inputs/CalendarOrderByWithAggregationInput";
import { CalendarScalarWhereWithAggregatesInput } from "../../../inputs/CalendarScalarWhereWithAggregatesInput";
import { CalendarWhereInput } from "../../../inputs/CalendarWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByCalendarArgs {
  @TypeGraphQL.Field((_type) => CalendarWhereInput, {
    nullable: true,
  })
  where?: CalendarWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [CalendarOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: CalendarOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "uid"
    | "userId"
    | "name"
    | "color"
    | "provider"
    | "remoteId"
    | "syncToken"
    | "accountId"
    | "primary"
    | "public"
    | "enabled"
    | "createdAt"
    | "updatedAt"
    | "archivedAt"
  >;

  @TypeGraphQL.Field((_type) => CalendarScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: CalendarScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
