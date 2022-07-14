import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("ActWhereUniqueInput", {
  isAbstract: true,
})
export class ActWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  slug?: string | undefined;
}
