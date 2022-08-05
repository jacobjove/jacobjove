import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("ActionWhereUniqueInput", { isAbstract: true })
export class ActionWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;
}
