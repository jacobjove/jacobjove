import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("RedirectAvgAggregate", {
  isAbstract: true,
})
export class RedirectAvgAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;
}
