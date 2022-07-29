import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("MantraAvgAggregate", {
  isAbstract: true,
})
export class MantraAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;
}
