import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingWhereInput } from "../inputs/ShelvingWhereInput";

@TypeGraphQL.InputType("ShelvingListRelationFilter", {
  isAbstract: true,
})
export class ShelvingListRelationFilter {
  @TypeGraphQL.Field((_type) => ShelvingWhereInput, { nullable: true })
  every?: ShelvingWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ShelvingWhereInput, { nullable: true })
  some?: ShelvingWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ShelvingWhereInput, { nullable: true })
  none?: ShelvingWhereInput | undefined;
}
