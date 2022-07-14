import * as TypeGraphQL from "type-graphql";
import { AuthorWhereInput } from "../inputs/AuthorWhereInput";

@TypeGraphQL.InputType("AuthorRelationFilter", {
  isAbstract: true,
})
export class AuthorRelationFilter {
  @TypeGraphQL.Field((_type) => AuthorWhereInput, {
    nullable: true,
  })
  is?: AuthorWhereInput | undefined;

  @TypeGraphQL.Field((_type) => AuthorWhereInput, {
    nullable: true,
  })
  isNot?: AuthorWhereInput | undefined;
}
