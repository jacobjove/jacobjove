import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("MantraAvgAggregate", {
  isAbstract: true,
})
export class MantraAvgAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;
}
