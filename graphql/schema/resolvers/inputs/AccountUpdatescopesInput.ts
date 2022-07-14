import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("AccountUpdatescopesInput", {
  isAbstract: true,
})
export class AccountUpdatescopesInput {
  @TypeGraphQL.Field((_type) => [String], {
    nullable: true,
  })
  set?: string[] | undefined;

  @TypeGraphQL.Field((_type) => [String], {
    nullable: true,
  })
  push?: string[] | undefined;
}
