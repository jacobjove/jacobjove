import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewCreateManyUserInput } from "../inputs/BookReviewCreateManyUserInput";

@TypeGraphQL.InputType("BookReviewCreateManyUserInputEnvelope", {
  isAbstract: true,
})
export class BookReviewCreateManyUserInputEnvelope {
  @TypeGraphQL.Field((_type) => [BookReviewCreateManyUserInput], { nullable: false })
  data!: BookReviewCreateManyUserInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
