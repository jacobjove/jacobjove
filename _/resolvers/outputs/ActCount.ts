import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ActCount", { isAbstract: true })
export class ActCount {
  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  variants!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  habits!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  metricApplications!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  identityRelations!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  scheduleTemplates!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  categorizations!: number;
}
