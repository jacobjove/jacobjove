import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("CategoryWhereUniqueInput", {
  isAbstract: true,
})
export class CategoryWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;
}
