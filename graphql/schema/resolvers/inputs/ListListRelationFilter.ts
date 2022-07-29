import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListWhereInput } from "../inputs/ListWhereInput";

@TypeGraphQL.InputType("ListListRelationFilter", {
  isAbstract: true,
})
export class ListListRelationFilter {
  @TypeGraphQL.Field((_type) => ListWhereInput, { nullable: true })
  every?: ListWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ListWhereInput, { nullable: true })
  some?: ListWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ListWhereInput, { nullable: true })
  none?: ListWhereInput | undefined;
}
