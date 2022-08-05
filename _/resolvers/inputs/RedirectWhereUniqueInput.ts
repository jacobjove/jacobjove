import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("RedirectWhereUniqueInput", { isAbstract: true })
export class RedirectWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;
}
