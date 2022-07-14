import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("IdentitySumAggregate", {
  isAbstract: true,
})
export class IdentitySumAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;
}
