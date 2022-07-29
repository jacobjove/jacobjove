import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookUpdateOneRequiredWithoutBookReviewInput } from "../inputs/BookUpdateOneRequiredWithoutBookReviewInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ReadingUpdateOneWithoutReviewInput } from "../inputs/ReadingUpdateOneWithoutReviewInput";

@TypeGraphQL.InputType("BookReviewUpdateWithoutUserInput", {
  isAbstract: true,
})
export class BookReviewUpdateWithoutUserInput {
  @TypeGraphQL.Field({ nullable: true })
  review?: string | null | undefined;

  @TypeGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  rating?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => BookUpdateOneRequiredWithoutBookReviewInput, { nullable: true })
  book?: BookUpdateOneRequiredWithoutBookReviewInput | undefined;

  @TypeGraphQL.Field(() => ReadingUpdateOneWithoutReviewInput, { nullable: true })
  reading?: ReadingUpdateOneWithoutReviewInput | undefined;
}
