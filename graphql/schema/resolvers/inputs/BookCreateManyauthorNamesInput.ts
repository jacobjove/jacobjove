import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("BookCreateManyauthorNamesInput", {
  isAbstract: true,
})
export class BookCreateManyauthorNamesInput {
  @TypeGraphQL.Field((_type) => [String], {
    nullable: false,
  })
  set!: string[];
}
