import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("BookCreateManyauthorNamesInput", {
  isAbstract: true,
})
export class BookCreateManyauthorNamesInput {
  @TypeGraphQL.Field(() => [String], { nullable: false })
  set!: string[];
}
