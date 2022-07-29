import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ActionScheduleSumAggregate", {
  isAbstract: true,
})
export class ActionScheduleSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  habitId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  multiplier!: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  quantity!: number | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  templateId!: string | null;
}
