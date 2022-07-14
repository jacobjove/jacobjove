import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("AuthorAvgAggregate", {
  isAbstract: true,
})
export class AuthorAvgAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;
}
