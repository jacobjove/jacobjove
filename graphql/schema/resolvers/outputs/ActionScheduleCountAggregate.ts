import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ActionScheduleCountAggregate", {
  isAbstract: true,
})
export class ActionScheduleCountAggregate {
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  habitId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  frequency!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  multiplier!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  quantity!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  active!: number;

  @TypeGraphQL.Field(() => String, { nullable: false })
  templateId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  createdAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  updatedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  archivedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
