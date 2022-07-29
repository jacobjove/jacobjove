import * as TypeGraphQL from "type-graphql-v2-fork";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ReadingUpdateOneWithoutReviewInput } from "../inputs/ReadingUpdateOneWithoutReviewInput";
import { UserUpdateOneRequiredWithoutBookReviewsInput } from "../inputs/UserUpdateOneRequiredWithoutBookReviewsInput";

@TypeGraphQL.InputType("BookReviewUpdateWithoutBookInput", {
  isAbstract: true,
})
export class BookReviewUpdateWithoutBookInput {
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

  @TypeGraphQL.Field(() => UserUpdateOneRequiredWithoutBookReviewsInput, { nullable: true })
  user?: UserUpdateOneRequiredWithoutBookReviewsInput | undefined;

  @TypeGraphQL.Field(() => ReadingUpdateOneWithoutReviewInput, { nullable: true })
  reading?: ReadingUpdateOneWithoutReviewInput | undefined;
}
