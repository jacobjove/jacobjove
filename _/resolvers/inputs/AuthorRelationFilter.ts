import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorWhereInput } from "../inputs/AuthorWhereInput";

@TypeGraphQL.InputType("AuthorRelationFilter", { isAbstract: true })
export class AuthorRelationFilter {
  @TypeGraphQL.Field(() => AuthorWhereInput, { nullable: true })
  is?: AuthorWhereInput | undefined;

  @TypeGraphQL.Field(() => AuthorWhereInput, { nullable: true })
  isNot?: AuthorWhereInput | undefined;
}
