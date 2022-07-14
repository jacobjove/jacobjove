import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("AccountMaxAggregate", {
  isAbstract: true,
})
export class AccountMaxAggregate {
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
  provider!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  remoteId!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  accessToken!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  refreshToken!: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  accessTokenExpiry!: Date | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  syncToken!: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  createdAt!: Date | null;
}
