import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("UserSumAggregate", {
  isAbstract: true,
})
export class UserSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;
}
