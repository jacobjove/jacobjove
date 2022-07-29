import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { AuthorshipCreateNestedManyWithoutAuthorInput } from "../inputs/AuthorshipCreateNestedManyWithoutAuthorInput";

@TypeGraphQL.InputType("AuthorCreateInput", {
  isAbstract: true,
})
export class AuthorCreateInput {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => AuthorshipCreateNestedManyWithoutAuthorInput, { nullable: true })
  authorships?: AuthorshipCreateNestedManyWithoutAuthorInput | undefined;
}
