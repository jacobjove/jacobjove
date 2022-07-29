import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("HabitWhereUniqueInput", {
  isAbstract: true,
})
export class HabitWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;
}
