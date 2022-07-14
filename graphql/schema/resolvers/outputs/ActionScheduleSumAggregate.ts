import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("ActionScheduleSumAggregate", {
  isAbstract: true,
})
export class ActionScheduleSumAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  habitId!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  multiplier!: number | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  quantity!: number | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  templateId!: string | null;
}
