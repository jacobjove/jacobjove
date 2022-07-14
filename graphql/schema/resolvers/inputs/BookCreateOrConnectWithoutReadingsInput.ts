import * as TypeGraphQL from "type-graphql";
import { BookCreateWithoutReadingsInput } from "../inputs/BookCreateWithoutReadingsInput";
import { BookWhereUniqueInput } from "../inputs/BookWhereUniqueInput";

@TypeGraphQL.InputType("BookCreateOrConnectWithoutReadingsInput", {
  isAbstract: true,
})
export class BookCreateOrConnectWithoutReadingsInput {
  @TypeGraphQL.Field((_type) => BookWhereUniqueInput, {
    nullable: false,
  })
  where!: BookWhereUniqueInput;

  @TypeGraphQL.Field((_type) => BookCreateWithoutReadingsInput, {
    nullable: false,
  })
  create!: BookCreateWithoutReadingsInput;
}
