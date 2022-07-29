import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorUpdateOneRequiredWithoutAuthorshipsInput } from "../inputs/AuthorUpdateOneRequiredWithoutAuthorshipsInput";
import { BookUpdateOneRequiredWithoutAuthorshipsInput } from "../inputs/BookUpdateOneRequiredWithoutAuthorshipsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("AuthorshipUpdateInput", {
  isAbstract: true,
})
export class AuthorshipUpdateInput {
  @TypeGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  position?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => AuthorUpdateOneRequiredWithoutAuthorshipsInput, { nullable: true })
  author?: AuthorUpdateOneRequiredWithoutAuthorshipsInput | undefined;

  @TypeGraphQL.Field(() => BookUpdateOneRequiredWithoutAuthorshipsInput, { nullable: true })
  book?: BookUpdateOneRequiredWithoutAuthorshipsInput | undefined;
}
