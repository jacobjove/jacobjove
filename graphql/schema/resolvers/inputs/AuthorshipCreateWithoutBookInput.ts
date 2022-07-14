import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { AuthorCreateNestedOneWithoutAuthorshipsInput } from "../inputs/AuthorCreateNestedOneWithoutAuthorshipsInput";

@TypeGraphQL.InputType("AuthorshipCreateWithoutBookInput", {
  isAbstract: true,
})
export class AuthorshipCreateWithoutBookInput {
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

  @TypeGraphQL.Field((_type) => AuthorCreateNestedOneWithoutAuthorshipsInput, {
    nullable: false,
  })
  author!: AuthorCreateNestedOneWithoutAuthorshipsInput;
}
