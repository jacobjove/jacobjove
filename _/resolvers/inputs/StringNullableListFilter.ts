import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("StringNullableListFilter", { isAbstract: true })
export class StringNullableListFilter {
  @TypeGraphQL.Field(() => [String], { nullable: true })
  equals?: string[] | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  has?: string | undefined;

  @TypeGraphQL.Field(() => [String], { nullable: true })
  hasEvery?: string[] | undefined;

  @TypeGraphQL.Field(() => [String], { nullable: true })
  hasSome?: string[] | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  isEmpty?: boolean | undefined;
}
