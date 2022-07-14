import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("AuthorSumAggregate", {
  isAbstract: true,
})
export class AuthorSumAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;
}
