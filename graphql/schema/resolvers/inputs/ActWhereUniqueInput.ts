import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("ActWhereUniqueInput", {
  isAbstract: true,
})
export class ActWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  slug?: string | undefined;
}
