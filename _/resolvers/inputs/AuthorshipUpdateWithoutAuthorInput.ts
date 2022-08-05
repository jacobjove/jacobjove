import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookUpdateOneRequiredWithoutAuthorshipsInput } from "../inputs/BookUpdateOneRequiredWithoutAuthorshipsInput";

@TypeGraphQL.InputType("AuthorshipUpdateWithoutAuthorInput", { isAbstract: true })
export class AuthorshipUpdateWithoutAuthorInput {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  position?: number | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => BookUpdateOneRequiredWithoutAuthorshipsInput, { nullable: true })
  book?: BookUpdateOneRequiredWithoutAuthorshipsInput | undefined;
}
