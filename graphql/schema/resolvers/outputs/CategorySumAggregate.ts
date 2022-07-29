import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("CategorySumAggregate", {
  isAbstract: true,
})
export class CategorySumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;
}
