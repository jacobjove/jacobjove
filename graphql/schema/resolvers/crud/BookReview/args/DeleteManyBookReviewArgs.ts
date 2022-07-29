import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewWhereInput } from "../../../inputs/BookReviewWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyBookReviewArgs {
  @TypeGraphQL.Field((_type) => BookReviewWhereInput, { nullable: true })
  where?: BookReviewWhereInput | undefined;
}
