import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookUpdateOneRequiredWithoutReadingsInput } from "../inputs/BookUpdateOneRequiredWithoutReadingsInput";
import { UserUpdateOneRequiredWithoutReadingsInput } from "../inputs/UserUpdateOneRequiredWithoutReadingsInput";

@TypeGraphQL.InputType("ReadingUpdateWithoutReviewInput", {
  isAbstract: true,
})
export class ReadingUpdateWithoutReviewInput {
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

  @TypeGraphQL.Field(() => UserUpdateOneRequiredWithoutReadingsInput, { nullable: true })
  user?: UserUpdateOneRequiredWithoutReadingsInput | undefined;

  @TypeGraphQL.Field(() => BookUpdateOneRequiredWithoutReadingsInput, { nullable: true })
  book?: BookUpdateOneRequiredWithoutReadingsInput | undefined;
}
