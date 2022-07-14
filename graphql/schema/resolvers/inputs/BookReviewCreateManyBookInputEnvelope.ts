import * as TypeGraphQL from "type-graphql";
import { BookReviewCreateManyBookInput } from "../inputs/BookReviewCreateManyBookInput";

@TypeGraphQL.InputType("BookReviewCreateManyBookInputEnvelope", {
  isAbstract: true,
})
export class BookReviewCreateManyBookInputEnvelope {
  @TypeGraphQL.Field((_type) => [BookReviewCreateManyBookInput], {
    nullable: false,
  })
  data!: BookReviewCreateManyBookInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
