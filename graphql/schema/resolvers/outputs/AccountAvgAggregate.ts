import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("AccountAvgAggregate", {
  isAbstract: true,
})
export class AccountAvgAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  userId!: string | null;
}
