import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("AccountCreateManyscopesInput", {
  isAbstract: true,
})
export class AccountCreateManyscopesInput {
  @TypeGraphQL.Field((_type) => [String], { nullable: false })
  set!: string[];
}
