import * as TypeGraphQL from "type-graphql";
import { ReadingWhereInput } from "../inputs/ReadingWhereInput";

@TypeGraphQL.InputType("ReadingListRelationFilter", {
  isAbstract: true,
})
export class ReadingListRelationFilter {
  @TypeGraphQL.Field((_type) => ReadingWhereInput, {
    nullable: true,
  })
  every?: ReadingWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ReadingWhereInput, {
    nullable: true,
  })
  some?: ReadingWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ReadingWhereInput, {
    nullable: true,
  })
  none?: ReadingWhereInput | undefined;
}
