import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("BookUpdateauthorNamesLfInput", { isAbstract: true })
export class BookUpdateauthorNamesLfInput {
  @TypeGraphQL.Field(() => [String], { nullable: true })
  set?: string[] | undefined;

  @TypeGraphQL.Field(() => [String], { nullable: true })
  push?: string[] | undefined;
}
