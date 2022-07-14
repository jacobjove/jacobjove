import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("MantraSumAggregate", {
  isAbstract: true,
})
export class MantraSumAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;
}
