import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("BeliefWhereUniqueInput", {
  isAbstract: true,
})
export class BeliefWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  slug?: string | undefined;
}
