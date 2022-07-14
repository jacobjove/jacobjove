import * as TypeGraphQL from "type-graphql";
import { NestedBoolFilter } from "../inputs/NestedBoolFilter";

@TypeGraphQL.InputType("BoolFilter", {
  isAbstract: true,
})
export class BoolFilter {
  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  equals?: boolean | undefined;

  @TypeGraphQL.Field((_type) => NestedBoolFilter, {
    nullable: true,
  })
  not?: NestedBoolFilter | undefined;
}
