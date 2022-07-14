import * as TypeGraphQL from "type-graphql";
import { BookshelfCreateWithoutOwnerInput } from "../inputs/BookshelfCreateWithoutOwnerInput";
import { BookshelfUpdateWithoutOwnerInput } from "../inputs/BookshelfUpdateWithoutOwnerInput";
import { BookshelfWhereUniqueInput } from "../inputs/BookshelfWhereUniqueInput";

@TypeGraphQL.InputType("BookshelfUpsertWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true,
})
export class BookshelfUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field((_type) => BookshelfWhereUniqueInput, {
    nullable: false,
  })
  where!: BookshelfWhereUniqueInput;

  @TypeGraphQL.Field((_type) => BookshelfUpdateWithoutOwnerInput, {
    nullable: false,
  })
  update!: BookshelfUpdateWithoutOwnerInput;

  @TypeGraphQL.Field((_type) => BookshelfCreateWithoutOwnerInput, {
    nullable: false,
  })
  create!: BookshelfCreateWithoutOwnerInput;
}
