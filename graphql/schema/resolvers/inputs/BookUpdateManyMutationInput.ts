import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ExtraBookData } from "../../models/Book";
import { BookUpdateauthorNamesInput } from "../inputs/BookUpdateauthorNamesInput";
import { BookUpdateauthorNamesLfInput } from "../inputs/BookUpdateauthorNamesLfInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("BookUpdateManyMutationInput", {
  isAbstract: true,
})
export class BookUpdateManyMutationInput {
  @TypeGraphQL.Field({ nullable: true })
  isbn?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  isbn13?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  title?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  slug?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  description?: string | null | undefined;

  @TypeGraphQL.Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  publicationYear?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  originalPublicationYear?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: true })
  extra?: ExtraBookData | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => BookUpdateauthorNamesInput, { nullable: true })
  authorNames?: BookUpdateauthorNamesInput | undefined;

  @TypeGraphQL.Field(() => BookUpdateauthorNamesLfInput, { nullable: true })
  authorNamesLf?: BookUpdateauthorNamesLfInput | undefined;
}
