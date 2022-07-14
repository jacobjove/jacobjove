import { Prisma } from "@prisma/client";
import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql";
import { BookReviewUpdateManyWithoutBookInput } from "../inputs/BookReviewUpdateManyWithoutBookInput";
import { BookUpdateauthorNamesInput } from "../inputs/BookUpdateauthorNamesInput";
import { BookUpdateauthorNamesLfInput } from "../inputs/BookUpdateauthorNamesLfInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ReadingUpdateManyWithoutBookInput } from "../inputs/ReadingUpdateManyWithoutBookInput";
import { ShelvingUpdateManyWithoutBookInput } from "../inputs/ShelvingUpdateManyWithoutBookInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("BookUpdateWithoutAuthorshipsInput", {
  isAbstract: true,
})
export class BookUpdateWithoutAuthorshipsInput {
  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, {
    nullable: true,
  })
  ids?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  isbn?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  isbn13?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  slug?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableIntFieldUpdateOperationsInput, {
    nullable: true,
  })
  publicationYear?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableIntFieldUpdateOperationsInput, {
    nullable: true,
  })
  originalPublicationYear?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, {
    nullable: true,
  })
  extra?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  archivedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => BookUpdateauthorNamesInput, {
    nullable: true,
  })
  authorNames?: BookUpdateauthorNamesInput | undefined;

  @TypeGraphQL.Field((_type) => BookUpdateauthorNamesLfInput, {
    nullable: true,
  })
  authorNamesLf?: BookUpdateauthorNamesLfInput | undefined;

  @TypeGraphQL.Field((_type) => ReadingUpdateManyWithoutBookInput, {
    nullable: true,
  })
  readings?: ReadingUpdateManyWithoutBookInput | undefined;

  @TypeGraphQL.Field((_type) => ShelvingUpdateManyWithoutBookInput, {
    nullable: true,
  })
  shelvings?: ShelvingUpdateManyWithoutBookInput | undefined;

  @TypeGraphQL.Field((_type) => BookReviewUpdateManyWithoutBookInput, {
    nullable: true,
  })
  BookReview?: BookReviewUpdateManyWithoutBookInput | undefined;
}
