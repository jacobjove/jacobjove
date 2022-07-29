import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookUpdateOneRequiredWithoutAuthorshipsInput } from "../inputs/BookUpdateOneRequiredWithoutAuthorshipsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("AuthorshipUpdateWithoutAuthorInput", {
  isAbstract: true,
})
export class AuthorshipUpdateWithoutAuthorInput {
  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, { nullable: true })
  position?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => BookUpdateOneRequiredWithoutAuthorshipsInput, { nullable: true })
  book?: BookUpdateOneRequiredWithoutAuthorshipsInput | undefined;
}
