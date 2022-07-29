import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewUpdateOneWithoutReadingInput } from "../inputs/BookReviewUpdateOneWithoutReadingInput";
import { BookUpdateOneRequiredWithoutReadingsInput } from "../inputs/BookUpdateOneRequiredWithoutReadingsInput";
import { UserUpdateOneRequiredWithoutReadingsInput } from "../inputs/UserUpdateOneRequiredWithoutReadingsInput";

@TypeGraphQL.InputType("ReadingUpdateInput", {
  isAbstract: true,
})
export class ReadingUpdateInput {
  @TypeGraphQL.Field({ nullable: true })
  dateStarted?: Date | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  dateFinished?: Date | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateOneRequiredWithoutReadingsInput, { nullable: true })
  user?: UserUpdateOneRequiredWithoutReadingsInput | undefined;

  @TypeGraphQL.Field((_type) => BookUpdateOneRequiredWithoutReadingsInput, { nullable: true })
  book?: BookUpdateOneRequiredWithoutReadingsInput | undefined;

  @TypeGraphQL.Field((_type) => BookReviewUpdateOneWithoutReadingInput, { nullable: true })
  review?: BookReviewUpdateOneWithoutReadingInput | undefined;
}
