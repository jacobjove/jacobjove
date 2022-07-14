import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("BookCreateauthorNamesInput", {
  isAbstract: true,
})
export class BookCreateauthorNamesInput {
  @TypeGraphQL.Field((_type) => [String], {
    nullable: false,
  })
  set!: string[];
}
