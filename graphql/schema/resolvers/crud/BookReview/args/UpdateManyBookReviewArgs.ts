import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewUpdateManyMutationInput } from "../../../inputs/BookReviewUpdateManyMutationInput";
import { BookReviewWhereInput } from "../../../inputs/BookReviewWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyBookReviewArgs {
  @TypeGraphQL.Field(() => BookReviewUpdateManyMutationInput, { nullable: false })
  data!: BookReviewUpdateManyMutationInput;

  @TypeGraphQL.Field(() => BookReviewWhereInput, { nullable: true })
  where?: BookReviewWhereInput | undefined;
}
