import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("ActionSumAggregate", {
  isAbstract: true,
})
export class ActionSumAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  habitId!: string | null;
}
