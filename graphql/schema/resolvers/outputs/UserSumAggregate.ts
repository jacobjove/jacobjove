import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("UserSumAggregate", {
  isAbstract: true,
})
export class UserSumAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;
}
