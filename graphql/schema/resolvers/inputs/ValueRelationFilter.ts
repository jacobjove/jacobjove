import * as TypeGraphQL from "type-graphql";
import { ValueWhereInput } from "../inputs/ValueWhereInput";

@TypeGraphQL.InputType("ValueRelationFilter", {
  isAbstract: true,
})
export class ValueRelationFilter {
  @TypeGraphQL.Field((_type) => ValueWhereInput, {
    nullable: true,
  })
  is?: ValueWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ValueWhereInput, {
    nullable: true,
  })
  isNot?: ValueWhereInput | undefined;
}
