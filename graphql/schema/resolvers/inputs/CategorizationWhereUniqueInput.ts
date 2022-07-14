import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("CategorizationWhereUniqueInput", {
  isAbstract: true,
})
export class CategorizationWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;
}
