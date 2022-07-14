import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("ActionAvgAggregate", {
  isAbstract: true,
})
export class ActionAvgAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  habitId!: string | null;
}
