import * as TypeGraphQL from "type-graphql-v2-fork";
import { NestedBoolFilter } from "../inputs/NestedBoolFilter";

@TypeGraphQL.InputType("BoolFilter", { isAbstract: true })
export class BoolFilter {
  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  equals?: boolean | undefined;

  @TypeGraphQL.Field(() => NestedBoolFilter, { nullable: true })
  not?: NestedBoolFilter | undefined;
}
