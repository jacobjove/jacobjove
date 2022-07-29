import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleScalarFieldEnum } from "../../../../enums/ActionScheduleScalarFieldEnum";
import { ActionScheduleOrderByWithRelationInput } from "../../../inputs/ActionScheduleOrderByWithRelationInput";
import { ActionScheduleWhereInput } from "../../../inputs/ActionScheduleWhereInput";
import { ActionScheduleWhereUniqueInput } from "../../../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindFirstActionScheduleArgs {
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

  @TypeGraphQL.Field((_type) => [ActionScheduleScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<
        | "id"
        | "habitId"
        | "frequency"
        | "multiplier"
        | "quantity"
        | "active"
        | "templateId"
        | "createdAt"
        | "updatedAt"
        | "archivedAt"
      >
    | undefined;
}
