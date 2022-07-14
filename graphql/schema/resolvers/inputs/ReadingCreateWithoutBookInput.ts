import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { BookReviewCreateNestedOneWithoutReadingInput } from "../inputs/BookReviewCreateNestedOneWithoutReadingInput";
import { UserCreateNestedOneWithoutReadingsInput } from "../inputs/UserCreateNestedOneWithoutReadingsInput";

@TypeGraphQL.InputType("ReadingCreateWithoutBookInput", {
  isAbstract: true,
})
export class ReadingCreateWithoutBookInput {
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

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutReadingsInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutReadingsInput;

  @TypeGraphQL.Field((_type) => BookReviewCreateNestedOneWithoutReadingInput, {
    nullable: true,
  })
  review?: BookReviewCreateNestedOneWithoutReadingInput | undefined;
}
