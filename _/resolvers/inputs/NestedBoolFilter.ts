import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("NestedBoolFilter", { isAbstract: true })
export class NestedBoolFilter {
  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  equals?: boolean | undefined;

  @TypeGraphQL.Field(() => NestedBoolFilter, { nullable: true })
  not?: NestedBoolFilter | undefined;
}
