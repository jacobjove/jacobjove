import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("ValueWhereUniqueInput", {
  isAbstract: true,
})
export class ValueWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  slug?: string | undefined;
}
