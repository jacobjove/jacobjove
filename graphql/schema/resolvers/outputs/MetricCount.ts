import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("MetricCount", {
  isAbstract: true,
})
export class MetricCount {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  applications!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  usages!: number;
}
