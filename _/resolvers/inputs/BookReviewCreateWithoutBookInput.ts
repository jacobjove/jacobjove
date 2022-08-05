import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ReadingCreateNestedOneWithoutReviewInput } from "../inputs/ReadingCreateNestedOneWithoutReviewInput";

@TypeGraphQL.InputType("BookReviewCreateWithoutBookInput", { isAbstract: true })
export class BookReviewCreateWithoutBookInput {
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

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => ReadingCreateNestedOneWithoutReviewInput, { nullable: true })
  reading?: ReadingCreateNestedOneWithoutReviewInput | undefined;
}
