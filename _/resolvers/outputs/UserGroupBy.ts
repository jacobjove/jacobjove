import { UserSettings } from "@/graphql/schema/generated/models";
import * as GraphQLScalars from "graphql-scalars";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { UserAvgAggregate } from "../outputs/UserAvgAggregate";
import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
import { UserSumAggregate } from "../outputs/UserSumAggregate";

@TypeGraphQL.ObjectType("UserGroupBy", { isAbstract: true })
export class UserGroupBy {
  @TypeGraphQL.Field(() => String, { nullable: false })
  _id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  uid!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  name!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: false })
  email!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  emailVerified!: Date | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  image!: string | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  isAdmin!: boolean;

  @TypeGraphQL.Field(() => GraphQLScalars.JSONResolver, { nullable: false })
  settings!: UserSettings;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  lastLogin!: Date | null;

  @TypeGraphQL.Field(() => UserCountAggregate, { nullable: true })
  _count!: UserCountAggregate | null;

  @TypeGraphQL.Field(() => UserAvgAggregate, { nullable: true })
  _avg!: UserAvgAggregate | null;

  @TypeGraphQL.Field(() => UserSumAggregate, { nullable: true })
  _sum!: UserSumAggregate | null;

  @TypeGraphQL.Field(() => UserMinAggregate, { nullable: true })
  _min!: UserMinAggregate | null;

  @TypeGraphQL.Field(() => UserMaxAggregate, { nullable: true })
  _max!: UserMaxAggregate | null;
}
