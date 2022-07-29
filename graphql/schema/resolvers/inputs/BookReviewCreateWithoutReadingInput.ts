import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { BookCreateNestedOneWithoutBookReviewInput } from "../inputs/BookCreateNestedOneWithoutBookReviewInput";
import { UserCreateNestedOneWithoutBookReviewsInput } from "../inputs/UserCreateNestedOneWithoutBookReviewsInput";

@TypeGraphQL.InputType("BookReviewCreateWithoutReadingInput", {
  isAbstract: true,
})
export class BookReviewCreateWithoutReadingInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  review!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  rating!: number;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => BookCreateNestedOneWithoutBookReviewInput, { nullable: false })
  book!: BookCreateNestedOneWithoutBookReviewInput;

  @TypeGraphQL.Field(() => UserCreateNestedOneWithoutBookReviewsInput, { nullable: false })
  user!: UserCreateNestedOneWithoutBookReviewsInput;
}
