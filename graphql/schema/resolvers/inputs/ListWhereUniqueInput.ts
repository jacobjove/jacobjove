import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("ListWhereUniqueInput", {
  isAbstract: true,
})
export class ListWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  slug?: string | undefined;
}
