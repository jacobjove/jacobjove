import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("BookCreateauthorNamesLfInput", {
  isAbstract: true,
})
export class BookCreateauthorNamesLfInput {
  @TypeGraphQL.Field(() => [String], { nullable: false })
  set!: string[];
}
