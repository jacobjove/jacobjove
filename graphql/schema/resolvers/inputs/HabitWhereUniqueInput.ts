import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.InputType("HabitWhereUniqueInput", {
  isAbstract: true,
})
export class HabitWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;
}
