import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("MetricUsageCount", {
  isAbstract: true,
})
export class MetricUsageCount {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  records!: number;
}
