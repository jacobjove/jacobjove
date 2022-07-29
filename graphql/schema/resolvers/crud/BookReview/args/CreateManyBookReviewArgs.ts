import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewCreateManyInput } from "../../../inputs/BookReviewCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBookReviewArgs {
  @TypeGraphQL.Field(() => [BookReviewCreateManyInput], { nullable: false })
  data!: BookReviewCreateManyInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
