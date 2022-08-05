import * as TypeGraphQL from "type-graphql-v2-fork";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";

@TypeGraphQL.InputType("CategoryRelationFilter", { isAbstract: true })
export class CategoryRelationFilter {
  @TypeGraphQL.Field(() => CategoryWhereInput, { nullable: true })
  is?: CategoryWhereInput | undefined;

  @TypeGraphQL.Field(() => CategoryWhereInput, { nullable: true })
  isNot?: CategoryWhereInput | undefined;
}
