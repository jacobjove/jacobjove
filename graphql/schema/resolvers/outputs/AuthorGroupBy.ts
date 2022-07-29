import * as TypeGraphQL from "type-graphql-v2-fork";
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
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => AuthorCountAggregate, { nullable: true })
  _count!: AuthorCountAggregate | null;

  @TypeGraphQL.Field(() => AuthorAvgAggregate, { nullable: true })
  _avg!: AuthorAvgAggregate | null;

  @TypeGraphQL.Field(() => AuthorSumAggregate, { nullable: true })
  _sum!: AuthorSumAggregate | null;

  @TypeGraphQL.Field(() => AuthorMinAggregate, { nullable: true })
  _min!: AuthorMinAggregate | null;

  @TypeGraphQL.Field(() => AuthorMaxAggregate, { nullable: true })
  _max!: AuthorMaxAggregate | null;
}
