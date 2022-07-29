import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CategorizationMinAggregate", {
  isAbstract: true,
})
export class CategorizationMinAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  categoryId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  actId!: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt!: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;
}
