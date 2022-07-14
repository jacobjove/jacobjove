import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("AccountCreateManyscopesInput", {
  isAbstract: true,
})
export class AccountCreateManyscopesInput {
  @TypeGraphQL.Field((_type) => [String], {
    nullable: false,
  })
  set!: string[];
}
