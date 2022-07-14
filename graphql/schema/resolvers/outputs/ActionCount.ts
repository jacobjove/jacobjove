import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("ActionCount", {
  isAbstract: true,
})
export class ActionCount {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  metricRecords!: number;
}
