import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("ValueCount", {
  isAbstract: true,
})
export class ValueCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  values!: number;
}
