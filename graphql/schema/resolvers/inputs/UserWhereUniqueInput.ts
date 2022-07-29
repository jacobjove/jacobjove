import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("UserWhereUniqueInput", {
  isAbstract: true,
})
export class UserWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  email?: string | undefined;
}
