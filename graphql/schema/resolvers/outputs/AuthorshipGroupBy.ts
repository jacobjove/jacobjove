import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { AuthorshipAvgAggregate } from "../outputs/AuthorshipAvgAggregate";
import { AuthorshipCountAggregate } from "../outputs/AuthorshipCountAggregate";
import { AuthorshipMaxAggregate } from "../outputs/AuthorshipMaxAggregate";
import { AuthorshipMinAggregate } from "../outputs/AuthorshipMinAggregate";
import { AuthorshipSumAggregate } from "../outputs/AuthorshipSumAggregate";

@TypeGraphQL.ObjectType("AuthorshipGroupBy", {
  isAbstract: true,
})
export class AuthorshipGroupBy {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  authorId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  bookId!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  position!: number;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field((_type) => AuthorshipCountAggregate, { nullable: true })
  _count!: AuthorshipCountAggregate | null;

  @TypeGraphQL.Field((_type) => AuthorshipAvgAggregate, { nullable: true })
  _avg!: AuthorshipAvgAggregate | null;

  @TypeGraphQL.Field((_type) => AuthorshipSumAggregate, { nullable: true })
  _sum!: AuthorshipSumAggregate | null;

  @TypeGraphQL.Field((_type) => AuthorshipMinAggregate, { nullable: true })
  _min!: AuthorshipMinAggregate | null;

  @TypeGraphQL.Field((_type) => AuthorshipMaxAggregate, { nullable: true })
  _max!: AuthorshipMaxAggregate | null;
}
