import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("UserAvgAggregate", {
  isAbstract: true,
})
export class UserAvgAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;
}
