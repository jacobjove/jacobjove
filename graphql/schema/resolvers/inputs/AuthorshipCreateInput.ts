import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { AuthorCreateNestedOneWithoutAuthorshipsInput } from "../inputs/AuthorCreateNestedOneWithoutAuthorshipsInput";
import { BookCreateNestedOneWithoutAuthorshipsInput } from "../inputs/BookCreateNestedOneWithoutAuthorshipsInput";

@TypeGraphQL.InputType("AuthorshipCreateInput", {
  isAbstract: true,
})
export class AuthorshipCreateInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  position?: number | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => AuthorCreateNestedOneWithoutAuthorshipsInput, { nullable: false })
  author!: AuthorCreateNestedOneWithoutAuthorshipsInput;

  @TypeGraphQL.Field((_type) => BookCreateNestedOneWithoutAuthorshipsInput, { nullable: false })
  book!: BookCreateNestedOneWithoutAuthorshipsInput;
}
