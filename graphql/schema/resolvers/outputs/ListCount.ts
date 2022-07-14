import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("ListCount", {
  isAbstract: true,
})
export class ListCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  items!: number;
}
