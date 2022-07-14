import * as TypeGraphQL from "type-graphql";
import { MantraWhereInput } from "../inputs/MantraWhereInput";

@TypeGraphQL.InputType("MantraRelationFilter", {
  isAbstract: true,
})
export class MantraRelationFilter {
  @TypeGraphQL.Field((_type) => MantraWhereInput, {
    nullable: true,
  })
  is?: MantraWhereInput | undefined;

  @TypeGraphQL.Field((_type) => MantraWhereInput, {
    nullable: true,
  })
  isNot?: MantraWhereInput | undefined;
}
