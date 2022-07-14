import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("AccountCreatescopesInput", {
  isAbstract: true,
})
export class AccountCreatescopesInput {
  @TypeGraphQL.Field((_type) => [String], {
    nullable: false,
  })
  set!: string[];
}
