import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfUpdateWithoutOwnerInput } from "../inputs/BookshelfUpdateWithoutOwnerInput";
import { BookshelfWhereUniqueInput } from "../inputs/BookshelfWhereUniqueInput";

@TypeGraphQL.InputType("BookshelfUpdateWithWhereUniqueWithoutOwnerInput", {
  isAbstract: true,
})
export class BookshelfUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field((_type) => BookshelfWhereUniqueInput, { nullable: false })
  where!: BookshelfWhereUniqueInput;

  @TypeGraphQL.Field((_type) => BookshelfUpdateWithoutOwnerInput, { nullable: false })
  data!: BookshelfUpdateWithoutOwnerInput;
}
