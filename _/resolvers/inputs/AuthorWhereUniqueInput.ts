import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("AuthorWhereUniqueInput", { isAbstract: true })
export class AuthorWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  slug?: string | undefined;
}
