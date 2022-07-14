import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("CategoryAvgAggregate", {
  isAbstract: true,
})
export class CategoryAvgAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;
}
