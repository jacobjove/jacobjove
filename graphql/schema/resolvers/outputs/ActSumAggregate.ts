import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("ActSumAggregate", {
  isAbstract: true,
})
export class ActSumAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  parentId!: string | null;
}
