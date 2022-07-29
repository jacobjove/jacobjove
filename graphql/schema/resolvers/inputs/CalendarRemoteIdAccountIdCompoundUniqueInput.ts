import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("CalendarRemoteIdAccountIdCompoundUniqueInput", {
  isAbstract: true,
})
export class CalendarRemoteIdAccountIdCompoundUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  remoteId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  accountId!: string;
}
