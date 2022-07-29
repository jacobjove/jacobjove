import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ListCount", {
  isAbstract: true,
})
export class ListCount {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  items!: number;
}
