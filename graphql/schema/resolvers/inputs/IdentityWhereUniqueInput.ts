import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("IdentityWhereUniqueInput", {
  isAbstract: true,
})
export class IdentityWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  slug?: string | undefined;
}
