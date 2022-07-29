import * as TypeGraphQL from "type-graphql-v2-fork";
import { ShelvingWhereInput } from "../inputs/ShelvingWhereInput";

@TypeGraphQL.InputType("ShelvingListRelationFilter", {
  isAbstract: true,
})
export class ShelvingListRelationFilter {
  @TypeGraphQL.Field(() => ShelvingWhereInput, { nullable: true })
  every?: ShelvingWhereInput | undefined;

  @TypeGraphQL.Field(() => ShelvingWhereInput, { nullable: true })
  some?: ShelvingWhereInput | undefined;

  @TypeGraphQL.Field(() => ShelvingWhereInput, { nullable: true })
  none?: ShelvingWhereInput | undefined;
}
