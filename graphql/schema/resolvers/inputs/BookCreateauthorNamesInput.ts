import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("BookCreateauthorNamesInput", {
  isAbstract: true,
})
export class BookCreateauthorNamesInput {
  @TypeGraphQL.Field(() => [String], { nullable: false })
  set!: string[];
}
