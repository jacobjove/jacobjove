import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("MantraCount", {
  isAbstract: true,
})
export class MantraCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  mantras!: number;
}
