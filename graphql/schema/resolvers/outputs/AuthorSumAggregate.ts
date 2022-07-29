import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("AuthorSumAggregate", {
  isAbstract: true,
})
export class AuthorSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;
}
