import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipWhereInput } from "../inputs/AuthorshipWhereInput";

@TypeGraphQL.InputType("AuthorshipListRelationFilter", {
  isAbstract: true,
})
export class AuthorshipListRelationFilter {
  @TypeGraphQL.Field(() => AuthorshipWhereInput, { nullable: true })
  every?: AuthorshipWhereInput | undefined;

  @TypeGraphQL.Field(() => AuthorshipWhereInput, { nullable: true })
  some?: AuthorshipWhereInput | undefined;

  @TypeGraphQL.Field(() => AuthorshipWhereInput, { nullable: true })
  none?: AuthorshipWhereInput | undefined;
}
