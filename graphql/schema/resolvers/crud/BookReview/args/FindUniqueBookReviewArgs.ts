import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewWhereUniqueInput } from "../../../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueBookReviewArgs {
  @TypeGraphQL.Field(() => BookReviewWhereUniqueInput, { nullable: false })
  where!: BookReviewWhereUniqueInput;
}
