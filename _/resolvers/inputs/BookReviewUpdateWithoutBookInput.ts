import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingUpdateOneWithoutReviewInput } from "../inputs/ReadingUpdateOneWithoutReviewInput";

@TypeGraphQL.InputType("BookReviewUpdateWithoutBookInput", { isAbstract: true })
export class BookReviewUpdateWithoutBookInput {
  @TypeGraphQL.Field({ nullable: true })
  review?: string | null | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  rating?: number | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => ReadingUpdateOneWithoutReviewInput, { nullable: true })
  reading?: ReadingUpdateOneWithoutReviewInput | undefined;
}
