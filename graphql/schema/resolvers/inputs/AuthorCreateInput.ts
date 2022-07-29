import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { AuthorshipCreateNestedManyWithoutAuthorInput } from "../inputs/AuthorshipCreateNestedManyWithoutAuthorInput";

@TypeGraphQL.InputType("AuthorCreateInput", {
  isAbstract: true,
})
export class AuthorCreateInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => AuthorshipCreateNestedManyWithoutAuthorInput, { nullable: true })
  authorships?: AuthorshipCreateNestedManyWithoutAuthorInput | undefined;
}
