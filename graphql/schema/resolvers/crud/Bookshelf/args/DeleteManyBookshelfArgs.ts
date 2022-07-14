import * as TypeGraphQL from "type-graphql";
import { BookshelfWhereInput } from "../../../inputs/BookshelfWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBookshelfArgs {
  @TypeGraphQL.Field((_type) => BookshelfWhereInput, {
    nullable: true,
  })
  where?: BookshelfWhereInput | undefined;
}
