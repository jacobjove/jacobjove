import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("BookUpdateauthorNamesInput", {
  isAbstract: true,
})
export class BookUpdateauthorNamesInput {
  @TypeGraphQL.Field(() => [String], { nullable: true })
  set?: string[] | undefined;

  @TypeGraphQL.Field(() => [String], { nullable: true })
  push?: string[] | undefined;
}
