import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql";
import { UserSettings } from "../../models/User";
import { DateTimeScalar } from "../../scalars";
import { UserAvgAggregate } from "../outputs/UserAvgAggregate";
import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
import { UserSumAggregate } from "../outputs/UserSumAggregate";

@TypeGraphQL.ObjectType("UserGroupBy", {
  isAbstract: true,
})
export class UserGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  uid!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  email!: string;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  emailVerified!: Date | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  image!: string | null;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: false,
  })
  isAdmin!: boolean;

  @TypeGraphQL.Field((_type) => GraphQLScalars.JSONResolver, {
    nullable: false,
  })
  settings!: UserSettings;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  lastLogin!: Date | null;

  @TypeGraphQL.Field((_type) => UserCountAggregate, {
    nullable: true,
  })
  _count!: UserCountAggregate | null;

  @TypeGraphQL.Field((_type) => UserAvgAggregate, {
    nullable: true,
  })
  _avg!: UserAvgAggregate | null;

  @TypeGraphQL.Field((_type) => UserSumAggregate, {
    nullable: true,
  })
  _sum!: UserSumAggregate | null;

  @TypeGraphQL.Field((_type) => UserMinAggregate, {
    nullable: true,
  })
  _min!: UserMinAggregate | null;

  @TypeGraphQL.Field((_type) => UserMaxAggregate, {
    nullable: true,
  })
  _max!: UserMaxAggregate | null;
}
