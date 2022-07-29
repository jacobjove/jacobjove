import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("DashboardMinAggregate", {
  isAbstract: true,
})
export class DashboardMinAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  name!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  isDefault!: boolean | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  isPublic!: boolean | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt!: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;
}
