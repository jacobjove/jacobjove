import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { AuthorCreateNestedOneWithoutAuthorshipsInput } from "../inputs/AuthorCreateNestedOneWithoutAuthorshipsInput";

@TypeGraphQL.InputType("AuthorshipCreateWithoutBookInput", {
  isAbstract: true,
})
export class AuthorshipCreateWithoutBookInput {
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
}
