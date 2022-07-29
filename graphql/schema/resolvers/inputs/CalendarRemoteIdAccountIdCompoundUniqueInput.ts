import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("CalendarRemoteIdAccountIdCompoundUniqueInput", {
  isAbstract: true,
})
export class CalendarRemoteIdAccountIdCompoundUniqueInput {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  remoteId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  accountId!: string;
}
