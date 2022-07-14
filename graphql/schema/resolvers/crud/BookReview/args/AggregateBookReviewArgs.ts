import * as TypeGraphQL from "type-graphql";
import { BookReviewOrderByWithRelationInput } from "../../../inputs/BookReviewOrderByWithRelationInput";
import { BookReviewWhereInput } from "../../../inputs/BookReviewWhereInput";
import { BookReviewWhereUniqueInput } from "../../../inputs/BookReviewWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateBookReviewArgs {
  @TypeGraphQL.Field((_type) => BookReviewWhereInput, {
    nullable: true,
  })
  where?: BookReviewWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [BookReviewOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: BookReviewOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => BookReviewWhereUniqueInput, {
    nullable: true,
  })
  cursor?: BookReviewWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
