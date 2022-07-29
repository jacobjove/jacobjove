import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("AuthorUpdateWithoutAuthorshipsInput", {
  isAbstract: true,
})
export class AuthorUpdateWithoutAuthorshipsInput {
  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  slug?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;
}
