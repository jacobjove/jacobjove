import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookWhereInput } from "../inputs/BookWhereInput";

@TypeGraphQL.InputType("BookRelationFilter", { isAbstract: true })
export class BookRelationFilter {
  @TypeGraphQL.Field(() => BookWhereInput, { nullable: true })
  is?: BookWhereInput | undefined;

  @TypeGraphQL.Field(() => BookWhereInput, { nullable: true })
  isNot?: BookWhereInput | undefined;
}
