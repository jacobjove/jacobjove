import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewCreateInput } from "../../../inputs/BookReviewCreateInput";

@TypeGraphQL.ArgsType()
export class CreateBookReviewArgs {
  @TypeGraphQL.Field(() => BookReviewCreateInput, { nullable: false })
  data!: BookReviewCreateInput;
}
