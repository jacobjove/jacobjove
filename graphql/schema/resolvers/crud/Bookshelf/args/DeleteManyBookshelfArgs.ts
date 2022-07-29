import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookshelfWhereInput } from "../../../inputs/BookshelfWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBookshelfArgs {
  @TypeGraphQL.Field(() => BookshelfWhereInput, { nullable: true })
  where?: BookshelfWhereInput | undefined;
}
