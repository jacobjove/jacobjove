import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("AccountMinAggregate", { isAbstract: true })
export class AccountMinAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  _id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  provider!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  remoteId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  accessToken!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  refreshToken!: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  accessTokenExpiry!: Date | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  syncToken!: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt!: Date | null;
}
