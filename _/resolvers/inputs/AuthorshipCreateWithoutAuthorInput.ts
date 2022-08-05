import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { BookCreateNestedOneWithoutAuthorshipsInput } from "../inputs/BookCreateNestedOneWithoutAuthorshipsInput";

@TypeGraphQL.InputType("AuthorshipCreateWithoutAuthorInput", { isAbstract: true })
export class AuthorshipCreateWithoutAuthorInput {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  position?: number | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => BookCreateNestedOneWithoutAuthorshipsInput, { nullable: false })
  book!: BookCreateNestedOneWithoutAuthorshipsInput;
}
