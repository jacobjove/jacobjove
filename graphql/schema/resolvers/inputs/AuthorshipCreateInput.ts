import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { AuthorCreateNestedOneWithoutAuthorshipsInput } from "../inputs/AuthorCreateNestedOneWithoutAuthorshipsInput";
import { BookCreateNestedOneWithoutAuthorshipsInput } from "../inputs/BookCreateNestedOneWithoutAuthorshipsInput";

@TypeGraphQL.InputType("AuthorshipCreateInput", {
  isAbstract: true,
})
export class AuthorshipCreateInput {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  position?: number | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => AuthorCreateNestedOneWithoutAuthorshipsInput, { nullable: false })
  author!: AuthorCreateNestedOneWithoutAuthorshipsInput;

  @TypeGraphQL.Field(() => BookCreateNestedOneWithoutAuthorshipsInput, { nullable: false })
  book!: BookCreateNestedOneWithoutAuthorshipsInput;
}
