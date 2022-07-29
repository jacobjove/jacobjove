import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarScalarFieldEnum } from "../../../../enums/CalendarScalarFieldEnum";
import { CalendarOrderByWithRelationInput } from "../../../inputs/CalendarOrderByWithRelationInput";
import { CalendarWhereInput } from "../../../inputs/CalendarWhereInput";
import { CalendarWhereUniqueInput } from "../../../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AccountCalendarsArgs {
  @TypeGraphQL.Field(() => CalendarWhereInput, { nullable: true })
  where?: CalendarWhereInput | undefined;

  @TypeGraphQL.Field(() => [CalendarOrderByWithRelationInput], { nullable: true })
  orderBy?: CalendarOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(() => CalendarWhereUniqueInput, { nullable: true })
  cursor?: CalendarWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  take?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  skip?: number | undefined;

  @TypeGraphQL.Field(() => [CalendarScalarFieldEnum], { nullable: true })
  distinct?:
    | Array<
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
      >
    | undefined;
}
