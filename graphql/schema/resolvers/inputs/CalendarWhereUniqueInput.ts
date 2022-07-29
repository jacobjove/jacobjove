import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarRemoteIdAccountIdCompoundUniqueInput } from "../inputs/CalendarRemoteIdAccountIdCompoundUniqueInput";

@TypeGraphQL.InputType("CalendarWhereUniqueInput", {
  isAbstract: true,
})
export class CalendarWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => CalendarRemoteIdAccountIdCompoundUniqueInput, { nullable: true })
  remoteId_accountId?: CalendarRemoteIdAccountIdCompoundUniqueInput | undefined;
}
