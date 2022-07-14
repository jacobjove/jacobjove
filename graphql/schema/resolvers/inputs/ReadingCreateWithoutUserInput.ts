import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { BookCreateNestedOneWithoutReadingsInput } from "../inputs/BookCreateNestedOneWithoutReadingsInput";
import { BookReviewCreateNestedOneWithoutReadingInput } from "../inputs/BookReviewCreateNestedOneWithoutReadingInput";

@TypeGraphQL.InputType("ReadingCreateWithoutUserInput", {
  isAbstract: true,
})
export class ReadingCreateWithoutUserInput {
  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  dateStarted?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  dateFinished?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => BookCreateNestedOneWithoutReadingsInput, {
    nullable: false,
  })
  book!: BookCreateNestedOneWithoutReadingsInput;

  @TypeGraphQL.Field((_type) => BookReviewCreateNestedOneWithoutReadingInput, {
    nullable: true,
  })
  review?: BookReviewCreateNestedOneWithoutReadingInput | undefined;
}
