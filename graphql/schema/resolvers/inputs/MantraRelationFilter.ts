import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraWhereInput } from "../inputs/MantraWhereInput";

@TypeGraphQL.InputType("MantraRelationFilter", {
  isAbstract: true,
})
export class MantraRelationFilter {
  @TypeGraphQL.Field(() => MantraWhereInput, { nullable: true })
  is?: MantraWhereInput | undefined;

  @TypeGraphQL.Field(() => MantraWhereInput, { nullable: true })
  isNot?: MantraWhereInput | undefined;
}
