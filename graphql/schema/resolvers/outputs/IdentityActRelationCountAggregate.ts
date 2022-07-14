import * as TypeGraphQL from "type-graphql";

@TypeGraphQL.ObjectType("IdentityActRelationCountAggregate", {
  isAbstract: true,
})
export class IdentityActRelationCountAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  identityId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  actionId!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  archivedAt!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  _all!: number;
}
