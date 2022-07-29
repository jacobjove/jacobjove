import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleOrderByWithRelationInput } from "../../../inputs/ActionScheduleOrderByWithRelationInput";
import { ActionScheduleWhereInput } from "../../../inputs/ActionScheduleWhereInput";
import { ActionScheduleWhereUniqueInput } from "../../../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateActionScheduleArgs {
  @TypeGraphQL.Field((_type) => ActionScheduleWhereInput, { nullable: true })
  where?: ActionScheduleWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleOrderByWithRelationInput], { nullable: true })
  orderBy?: ActionScheduleOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleWhereUniqueInput, { nullable: true })
  cursor?: ActionScheduleWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;
}
