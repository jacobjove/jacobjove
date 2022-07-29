import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("BookCreateManyauthorNamesLfInput", {
  isAbstract: true,
})
export class BookCreateManyauthorNamesLfInput {
  @TypeGraphQL.Field((_type) => [String], { nullable: false })
  set!: string[];
}
