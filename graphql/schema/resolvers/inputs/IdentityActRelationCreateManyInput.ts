import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("IdentityActRelationCreateManyInput", {
  isAbstract: true,
})
export class IdentityActRelationCreateManyInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: false })
  identityId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  actionId!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | undefined;
}
