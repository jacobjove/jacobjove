import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { AuthorshipAvgAggregate } from "../outputs/AuthorshipAvgAggregate";
import { AuthorshipCountAggregate } from "../outputs/AuthorshipCountAggregate";
import { AuthorshipMaxAggregate } from "../outputs/AuthorshipMaxAggregate";
import { AuthorshipMinAggregate } from "../outputs/AuthorshipMinAggregate";
import { AuthorshipSumAggregate } from "../outputs/AuthorshipSumAggregate";

@TypeGraphQL.ObjectType("AuthorshipGroupBy", { isAbstract: true })
export class AuthorshipGroupBy {
  @TypeGraphQL.Field(() => String, { nullable: false })
  _id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  authorId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  bookId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  position!: number;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

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
