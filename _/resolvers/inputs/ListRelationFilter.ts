import * as TypeGraphQL from "type-graphql-v2-fork";
import { ListWhereInput } from "../inputs/ListWhereInput";

@TypeGraphQL.InputType("ListRelationFilter", { isAbstract: true })
export class ListRelationFilter {
  @TypeGraphQL.Field(() => ListWhereInput, { nullable: true })
  is?: ListWhereInput | undefined;

  @TypeGraphQL.Field(() => ListWhereInput, { nullable: true })
  isNot?: ListWhereInput | undefined;
}
