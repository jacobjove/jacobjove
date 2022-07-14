import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("MantraSumAggregate", {
  isAbstract: true,
})
export class MantraSumAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  userId!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  mantraId!: string | null;
}
