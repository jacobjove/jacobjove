import * as TypeGraphQL from "type-graphql";
import { BookshelfCreateWithoutOwnerInput } from "../inputs/BookshelfCreateWithoutOwnerInput";
import { BookshelfWhereUniqueInput } from "../inputs/BookshelfWhereUniqueInput";

@TypeGraphQL.InputType("BookshelfCreateOrConnectWithoutOwnerInput", {
  isAbstract: true,
})
export class BookshelfCreateOrConnectWithoutOwnerInput {
  @TypeGraphQL.Field((_type) => BookshelfWhereUniqueInput, {
    nullable: false,
  })
  where!: BookshelfWhereUniqueInput;

  @TypeGraphQL.Field((_type) => BookshelfCreateWithoutOwnerInput, {
    nullable: false,
  })
  create!: BookshelfCreateWithoutOwnerInput;
}
