import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("BookCreateauthorNamesLfInput", {
  isAbstract: true,
})
export class BookCreateauthorNamesLfInput {
  @TypeGraphQL.Field((_type) => [String], {
    nullable: false,
  })
  set!: string[];
}
