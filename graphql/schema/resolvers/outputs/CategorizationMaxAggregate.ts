import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CategorizationMaxAggregate", {
  isAbstract: true,
})
export class CategorizationMaxAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  categoryId!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  actId!: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt!: Date | null;
}
