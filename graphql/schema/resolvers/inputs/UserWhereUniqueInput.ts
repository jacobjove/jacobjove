import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("UserWhereUniqueInput", {
  isAbstract: true,
})
export class UserWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  email?: string | undefined;
}
