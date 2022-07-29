import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorUpdateOneRequiredWithoutAuthorshipsInput } from "../inputs/AuthorUpdateOneRequiredWithoutAuthorshipsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("AuthorshipUpdateWithoutBookInput", {
  isAbstract: true,
})
export class AuthorshipUpdateWithoutBookInput {
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
}
