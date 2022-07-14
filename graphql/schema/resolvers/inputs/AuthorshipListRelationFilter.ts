import * as TypeGraphQL from "type-graphql";
import { AuthorshipWhereInput } from "../inputs/AuthorshipWhereInput";

@TypeGraphQL.InputType("AuthorshipListRelationFilter", {
  isAbstract: true,
})
export class AuthorshipListRelationFilter {
  @TypeGraphQL.Field((_type) => AuthorshipWhereInput, {
    nullable: true,
  })
  every?: AuthorshipWhereInput | undefined;

  @TypeGraphQL.Field((_type) => AuthorshipWhereInput, {
    nullable: true,
  })
  some?: AuthorshipWhereInput | undefined;

  @TypeGraphQL.Field((_type) => AuthorshipWhereInput, {
    nullable: true,
  })
  none?: AuthorshipWhereInput | undefined;
}
