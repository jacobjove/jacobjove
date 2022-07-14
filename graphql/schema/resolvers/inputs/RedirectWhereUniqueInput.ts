import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("RedirectWhereUniqueInput", {
  isAbstract: true,
})
export class RedirectWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;
}
