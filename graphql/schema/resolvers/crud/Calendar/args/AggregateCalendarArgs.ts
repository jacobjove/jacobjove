import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarOrderByWithRelationInput } from "../../../inputs/CalendarOrderByWithRelationInput";
import { CalendarWhereInput } from "../../../inputs/CalendarWhereInput";
import { CalendarWhereUniqueInput } from "../../../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCalendarArgs {
  @TypeGraphQL.Field((_type) => CalendarWhereInput, { nullable: true })
  where?: CalendarWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [CalendarOrderByWithRelationInput], { nullable: true })
  orderBy?: CalendarOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => CalendarWhereUniqueInput, { nullable: true })
  cursor?: CalendarWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
