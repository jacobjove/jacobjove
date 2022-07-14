import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("MantraWhereUniqueInput", {
  isAbstract: true,
})
export class MantraWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;
}
