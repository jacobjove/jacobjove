import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ReadingAvgAggregate } from "../outputs/ReadingAvgAggregate";
import { ReadingCountAggregate } from "../outputs/ReadingCountAggregate";
import { ReadingMaxAggregate } from "../outputs/ReadingMaxAggregate";
import { ReadingMinAggregate } from "../outputs/ReadingMinAggregate";
import { ReadingSumAggregate } from "../outputs/ReadingSumAggregate";

@TypeGraphQL.ObjectType("ReadingGroupBy", { isAbstract: true })
export class ReadingGroupBy {
  @TypeGraphQL.Field(() => String, { nullable: false })
  _id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  bookId!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  dateStarted!: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  dateFinished!: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => ReadingCountAggregate, { nullable: true })
  _count!: ReadingCountAggregate | null;

  @TypeGraphQL.Field(() => ReadingAvgAggregate, { nullable: true })
  _avg!: ReadingAvgAggregate | null;

  @TypeGraphQL.Field(() => ReadingSumAggregate, { nullable: true })
  _sum!: ReadingSumAggregate | null;

  @TypeGraphQL.Field(() => ReadingMinAggregate, { nullable: true })
  _min!: ReadingMinAggregate | null;

  @TypeGraphQL.Field(() => ReadingMaxAggregate, { nullable: true })
  _max!: ReadingMaxAggregate | null;
}
