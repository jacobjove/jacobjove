import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfCreateWithoutOwnerInput } from "../inputs/BookshelfCreateWithoutOwnerInput";
import { BookshelfWhereUniqueInput } from "../inputs/BookshelfWhereUniqueInput";

@TypeGraphQL.InputType("BookshelfCreateOrConnectWithoutOwnerInput", { isAbstract: true })
export class BookshelfCreateOrConnectWithoutOwnerInput {
  @TypeGraphQL.Field(() => BookshelfWhereUniqueInput, { nullable: false })
  where!: BookshelfWhereUniqueInput;

  @TypeGraphQL.Field(() => BookshelfCreateWithoutOwnerInput, { nullable: false })
  create!: BookshelfCreateWithoutOwnerInput;
}
