import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewCreateManyUserInput } from "../inputs/BookReviewCreateManyUserInput";

@TypeGraphQL.InputType("BookReviewCreateManyUserInputEnvelope", { isAbstract: true })
export class BookReviewCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(() => [BookReviewCreateManyUserInput], { nullable: false })
  data!: BookReviewCreateManyUserInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
