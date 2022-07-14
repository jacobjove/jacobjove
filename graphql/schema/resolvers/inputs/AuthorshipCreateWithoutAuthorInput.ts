import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { BookCreateNestedOneWithoutAuthorshipsInput } from "../inputs/BookCreateNestedOneWithoutAuthorshipsInput";

@TypeGraphQL.InputType("AuthorshipCreateWithoutAuthorInput", {
  isAbstract: true,
})
export class AuthorshipCreateWithoutAuthorInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  position?: number | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => BookCreateNestedOneWithoutAuthorshipsInput, {
    nullable: false,
  })
  book!: BookCreateNestedOneWithoutAuthorshipsInput;
}
