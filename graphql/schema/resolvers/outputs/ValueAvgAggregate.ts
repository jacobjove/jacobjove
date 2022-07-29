import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ValueAvgAggregate", {
  isAbstract: true,
})
export class ValueAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;
}
