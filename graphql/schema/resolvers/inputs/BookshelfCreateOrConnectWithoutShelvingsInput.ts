import * as TypeGraphQL from "type-graphql";
import { BookshelfCreateWithoutShelvingsInput } from "../inputs/BookshelfCreateWithoutShelvingsInput";
import { BookshelfWhereUniqueInput } from "../inputs/BookshelfWhereUniqueInput";

@TypeGraphQL.InputType("BookshelfCreateOrConnectWithoutShelvingsInput", {
  isAbstract: true,
})
export class BookshelfCreateOrConnectWithoutShelvingsInput {
  @TypeGraphQL.Field((_type) => BookshelfWhereUniqueInput, {
    nullable: false,
  })
  where!: BookshelfWhereUniqueInput;

  @TypeGraphQL.Field((_type) => BookshelfCreateWithoutShelvingsInput, {
    nullable: false,
  })
  create!: BookshelfCreateWithoutShelvingsInput;
}
