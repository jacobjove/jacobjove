import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { BookCreateNestedOneWithoutReadingsInput } from "../inputs/BookCreateNestedOneWithoutReadingsInput";
import { BookReviewCreateNestedOneWithoutReadingInput } from "../inputs/BookReviewCreateNestedOneWithoutReadingInput";
import { UserCreateNestedOneWithoutReadingsInput } from "../inputs/UserCreateNestedOneWithoutReadingsInput";

@TypeGraphQL.InputType("ReadingCreateInput", {
  isAbstract: true,
})
export class ReadingCreateInput {
  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  dateStarted?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  dateFinished?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => UserCreateNestedOneWithoutReadingsInput, { nullable: false })
  user!: UserCreateNestedOneWithoutReadingsInput;

  @TypeGraphQL.Field(() => BookCreateNestedOneWithoutReadingsInput, { nullable: false })
  book!: BookCreateNestedOneWithoutReadingsInput;

  @TypeGraphQL.Field(() => BookReviewCreateNestedOneWithoutReadingInput, { nullable: true })
  review?: BookReviewCreateNestedOneWithoutReadingInput | undefined;
}
