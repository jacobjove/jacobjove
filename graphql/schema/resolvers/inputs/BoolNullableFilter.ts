import * as TypeGraphQL from "type-graphql-v2-fork";
import { NestedBoolNullableFilter } from "../inputs/NestedBoolNullableFilter";

@TypeGraphQL.InputType("BoolNullableFilter", {
  isAbstract: true,
})
export class BoolNullableFilter {
  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  equals?: boolean | undefined;

  @TypeGraphQL.Field(() => NestedBoolNullableFilter, { nullable: true })
  not?: NestedBoolNullableFilter | undefined;
}
