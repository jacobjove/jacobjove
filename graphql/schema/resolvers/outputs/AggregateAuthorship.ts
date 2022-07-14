import * as TypeGraphQL from "type-graphql";
import { AuthorshipAvgAggregate } from "../outputs/AuthorshipAvgAggregate";
import { AuthorshipCountAggregate } from "../outputs/AuthorshipCountAggregate";
import { AuthorshipMaxAggregate } from "../outputs/AuthorshipMaxAggregate";
import { AuthorshipMinAggregate } from "../outputs/AuthorshipMinAggregate";
import { AuthorshipSumAggregate } from "../outputs/AuthorshipSumAggregate";

@TypeGraphQL.ObjectType("AggregateAuthorship", {
  isAbstract: true,
})
export class AggregateAuthorship {
  @TypeGraphQL.Field((_type) => AuthorshipCountAggregate, {
    nullable: true,
  })
  _count!: AuthorshipCountAggregate | null;

  @TypeGraphQL.Field((_type) => AuthorshipAvgAggregate, {
    nullable: true,
  })
  _avg!: AuthorshipAvgAggregate | null;

  @TypeGraphQL.Field((_type) => AuthorshipSumAggregate, {
    nullable: true,
  })
  _sum!: AuthorshipSumAggregate | null;

  @TypeGraphQL.Field((_type) => AuthorshipMinAggregate, {
    nullable: true,
  })
  _min!: AuthorshipMinAggregate | null;

  @TypeGraphQL.Field((_type) => AuthorshipMaxAggregate, {
    nullable: true,
  })
  _max!: AuthorshipMaxAggregate | null;
}
