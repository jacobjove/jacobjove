import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ActionAvgAggregate", {
  isAbstract: true,
})
export class ActionAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  habitId!: string | null;
}
