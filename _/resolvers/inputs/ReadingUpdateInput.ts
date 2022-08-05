import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewUpdateOneWithoutReadingInput } from "../inputs/BookReviewUpdateOneWithoutReadingInput";
import { BookUpdateOneRequiredWithoutReadingsInput } from "../inputs/BookUpdateOneRequiredWithoutReadingsInput";

@TypeGraphQL.InputType("ReadingUpdateInput", { isAbstract: true })
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

  @TypeGraphQL.Field(() => BookUpdateOneRequiredWithoutReadingsInput, { nullable: true })
  book?: BookUpdateOneRequiredWithoutReadingsInput | undefined;

  @TypeGraphQL.Field(() => BookReviewUpdateOneWithoutReadingInput, { nullable: true })
  review?: BookReviewUpdateOneWithoutReadingInput | undefined;
}
