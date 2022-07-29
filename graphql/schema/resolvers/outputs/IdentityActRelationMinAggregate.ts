import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("IdentityActRelationMinAggregate", {
  isAbstract: true,
})
export class IdentityActRelationMinAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  identityId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  actionId!: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;
}
