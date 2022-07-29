import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("CategoryCount", {
  isAbstract: true,
})
export class CategoryCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  categorizations!: number;
}
