import * as TypeGraphQL from "type-graphql-v2-fork";
import { AuthorshipAvgAggregate } from "../outputs/AuthorshipAvgAggregate";
import { AuthorshipCountAggregate } from "../outputs/AuthorshipCountAggregate";
import { AuthorshipMaxAggregate } from "../outputs/AuthorshipMaxAggregate";
import { AuthorshipMinAggregate } from "../outputs/AuthorshipMinAggregate";
import { AuthorshipSumAggregate } from "../outputs/AuthorshipSumAggregate";

@TypeGraphQL.ObjectType("AggregateAuthorship", {
  isAbstract: true,
})
export class AggregateAuthorship {
  @TypeGraphQL.Field(() => AuthorshipCountAggregate, { nullable: true })
  _count!: AuthorshipCountAggregate | null;

  @TypeGraphQL.Field(() => AuthorshipAvgAggregate, { nullable: true })
  _avg!: AuthorshipAvgAggregate | null;

  @TypeGraphQL.Field(() => AuthorshipSumAggregate, { nullable: true })
  _sum!: AuthorshipSumAggregate | null;

  @TypeGraphQL.Field(() => AuthorshipMinAggregate, { nullable: true })
  _min!: AuthorshipMinAggregate | null;

  @TypeGraphQL.Field(() => AuthorshipMaxAggregate, { nullable: true })
  _max!: AuthorshipMaxAggregate | null;
}
