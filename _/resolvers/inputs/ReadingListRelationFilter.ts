import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingWhereInput } from "../inputs/ReadingWhereInput";

@TypeGraphQL.InputType("ReadingListRelationFilter", { isAbstract: true })
export class ReadingListRelationFilter {
  @TypeGraphQL.Field(() => ReadingWhereInput, { nullable: true })
  every?: ReadingWhereInput | undefined;

  @TypeGraphQL.Field(() => ReadingWhereInput, { nullable: true })
  some?: ReadingWhereInput | undefined;

  @TypeGraphQL.Field(() => ReadingWhereInput, { nullable: true })
  none?: ReadingWhereInput | undefined;
}
