import * as TypeGraphQL from "type-graphql";
import { NestedBoolNullableFilter } from "../inputs/NestedBoolNullableFilter";

@TypeGraphQL.InputType("BoolNullableFilter", {
  isAbstract: true,
})
export class BoolNullableFilter {
  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  equals?: boolean | undefined;

  @TypeGraphQL.Field((_type) => NestedBoolNullableFilter, {
    nullable: true,
  })
  not?: NestedBoolNullableFilter | undefined;
}
