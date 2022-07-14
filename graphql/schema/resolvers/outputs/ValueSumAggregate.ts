import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("ValueSumAggregate", {
  isAbstract: true,
})
export class ValueSumAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;
}
