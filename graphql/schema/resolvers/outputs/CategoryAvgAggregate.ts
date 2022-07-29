import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("CategoryAvgAggregate", {
  isAbstract: true,
})
export class CategoryAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;
}
