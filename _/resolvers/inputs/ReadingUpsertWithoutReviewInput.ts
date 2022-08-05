import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingCreateWithoutReviewInput } from "../inputs/ReadingCreateWithoutReviewInput";
import { ReadingUpdateWithoutReviewInput } from "../inputs/ReadingUpdateWithoutReviewInput";

@TypeGraphQL.InputType("ReadingUpsertWithoutReviewInput", { isAbstract: true })
export class ReadingUpsertWithoutReviewInput {
  @TypeGraphQL.Field(() => ReadingUpdateWithoutReviewInput, { nullable: false })
  update!: ReadingUpdateWithoutReviewInput;

  @TypeGraphQL.Field(() => ReadingCreateWithoutReviewInput, { nullable: false })
  create!: ReadingCreateWithoutReviewInput;
}
