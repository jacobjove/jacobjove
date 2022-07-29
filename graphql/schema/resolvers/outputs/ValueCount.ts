import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ValueCount", {
  isAbstract: true,
})
export class ValueCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  values!: number;
}
