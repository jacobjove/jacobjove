import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";

@TypeGraphQL.InputType("NotebookUpdateManyMutationInput", {
  isAbstract: true,
})
export class NotebookUpdateManyMutationInput {
  @TypeGraphQL.Field({ nullable: true })
  title?: string | null | undefined;

  @TypeGraphQL.Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPublic?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  description?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;
}
