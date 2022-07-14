import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("RoutineWhereUniqueInput", {
  isAbstract: true,
})
export class RoutineWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;
}
