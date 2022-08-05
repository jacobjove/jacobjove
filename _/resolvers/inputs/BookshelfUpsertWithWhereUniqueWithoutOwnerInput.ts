import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfCreateWithoutOwnerInput } from "../inputs/BookshelfCreateWithoutOwnerInput";
import { BookshelfUpdateWithoutOwnerInput } from "../inputs/BookshelfUpdateWithoutOwnerInput";
import { BookshelfWhereUniqueInput } from "../inputs/BookshelfWhereUniqueInput";

@TypeGraphQL.InputType("BookshelfUpsertWithWhereUniqueWithoutOwnerInput", { isAbstract: true })
export class BookshelfUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(() => BookshelfWhereUniqueInput, { nullable: false })
  where!: BookshelfWhereUniqueInput;

  @TypeGraphQL.Field(() => BookshelfUpdateWithoutOwnerInput, { nullable: false })
  update!: BookshelfUpdateWithoutOwnerInput;

  @TypeGraphQL.Field(() => BookshelfCreateWithoutOwnerInput, { nullable: false })
  create!: BookshelfCreateWithoutOwnerInput;
}
