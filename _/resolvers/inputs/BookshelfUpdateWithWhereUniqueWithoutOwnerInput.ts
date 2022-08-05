import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfUpdateWithoutOwnerInput } from "../inputs/BookshelfUpdateWithoutOwnerInput";
import { BookshelfWhereUniqueInput } from "../inputs/BookshelfWhereUniqueInput";

@TypeGraphQL.InputType("BookshelfUpdateWithWhereUniqueWithoutOwnerInput", { isAbstract: true })
export class BookshelfUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(() => BookshelfWhereUniqueInput, { nullable: false })
  where!: BookshelfWhereUniqueInput;

  @TypeGraphQL.Field(() => BookshelfUpdateWithoutOwnerInput, { nullable: false })
  data!: BookshelfUpdateWithoutOwnerInput;
}
