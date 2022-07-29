import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("IdentityWhereUniqueInput", {
  isAbstract: true,
})
export class IdentityWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  slug?: string | undefined;
}
