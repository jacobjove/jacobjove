import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("CategoryCount", {
  isAbstract: true,
})
export class CategoryCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  categorizations!: number;
}
