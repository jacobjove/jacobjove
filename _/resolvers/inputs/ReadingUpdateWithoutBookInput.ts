import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReviewUpdateOneWithoutReadingInput } from "../inputs/BookReviewUpdateOneWithoutReadingInput";

@TypeGraphQL.InputType("ReadingUpdateWithoutBookInput", { isAbstract: true })
export class ReadingUpdateWithoutBookInput {
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

  @TypeGraphQL.Field(() => BookReviewUpdateOneWithoutReadingInput, { nullable: true })
  review?: BookReviewUpdateOneWithoutReadingInput | undefined;
}
