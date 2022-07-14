import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("CalendarRemoteIdAccountIdCompoundUniqueInput", {
  isAbstract: true,
})
export class CalendarRemoteIdAccountIdCompoundUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  remoteId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  accountId!: string;
}
