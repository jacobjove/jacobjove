import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("ActionWhereUniqueInput", {
  isAbstract: true,
})
export class ActionWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;
}
