import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("BookUpdateauthorNamesLfInput", {
  isAbstract: true,
})
export class BookUpdateauthorNamesLfInput {
  @TypeGraphQL.Field((_type) => [String], {
    nullable: true,
  })
  set?: string[] | undefined;

  @TypeGraphQL.Field((_type) => [String], {
    nullable: true,
  })
  push?: string[] | undefined;
}
