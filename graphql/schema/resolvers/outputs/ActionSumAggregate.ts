import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ActionSumAggregate", {
  isAbstract: true,
})
export class ActionSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  habitId!: string | null;
}
