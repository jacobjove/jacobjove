import * as TypeGraphQL from "type-graphql-v2-fork";
import { ReadingWhereInput } from "../inputs/ReadingWhereInput";

@TypeGraphQL.InputType("ReadingRelationFilter", {
  isAbstract: true,
})
export class ReadingRelationFilter {
  @TypeGraphQL.Field(() => ReadingWhereInput, { nullable: true })
  is?: ReadingWhereInput | undefined;

  @TypeGraphQL.Field(() => ReadingWhereInput, { nullable: true })
  isNot?: ReadingWhereInput | undefined;
}
