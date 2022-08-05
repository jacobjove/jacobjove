import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ActionCount", { isAbstract: true })
export class ActionCount {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  metricRecords!: number;
}
