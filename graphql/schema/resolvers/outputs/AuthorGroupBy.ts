import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { AuthorAvgAggregate } from "../outputs/AuthorAvgAggregate";
import { AuthorCountAggregate } from "../outputs/AuthorCountAggregate";
import { AuthorMaxAggregate } from "../outputs/AuthorMaxAggregate";
import { AuthorMinAggregate } from "../outputs/AuthorMinAggregate";
import { AuthorSumAggregate } from "../outputs/AuthorSumAggregate";

@TypeGraphQL.ObjectType("AuthorGroupBy", {
  isAbstract: true,
})
export class AuthorGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  slug!: string;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt!: Date | null;

  @TypeGraphQL.Field((_type) => AuthorCountAggregate, {
    nullable: true,
  })
  _count!: AuthorCountAggregate | null;

  @TypeGraphQL.Field((_type) => AuthorAvgAggregate, {
    nullable: true,
  })
  _avg!: AuthorAvgAggregate | null;

  @TypeGraphQL.Field((_type) => AuthorSumAggregate, {
    nullable: true,
  })
  _sum!: AuthorSumAggregate | null;

  @TypeGraphQL.Field((_type) => AuthorMinAggregate, {
    nullable: true,
  })
  _min!: AuthorMinAggregate | null;

  @TypeGraphQL.Field((_type) => AuthorMaxAggregate, {
    nullable: true,
  })
  _max!: AuthorMaxAggregate | null;
}
