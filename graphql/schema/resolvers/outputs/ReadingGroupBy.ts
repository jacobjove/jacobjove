import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { ReadingAvgAggregate } from "../outputs/ReadingAvgAggregate";
import { ReadingCountAggregate } from "../outputs/ReadingCountAggregate";
import { ReadingMaxAggregate } from "../outputs/ReadingMaxAggregate";
import { ReadingMinAggregate } from "../outputs/ReadingMinAggregate";
import { ReadingSumAggregate } from "../outputs/ReadingSumAggregate";

@TypeGraphQL.ObjectType("ReadingGroupBy", {
  isAbstract: true,
})
export class ReadingGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  bookId!: string;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  dateStarted!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  dateFinished!: Date | null;

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

  @TypeGraphQL.Field((_type) => ReadingCountAggregate, {
    nullable: true,
  })
  _count!: ReadingCountAggregate | null;

  @TypeGraphQL.Field((_type) => ReadingAvgAggregate, {
    nullable: true,
  })
  _avg!: ReadingAvgAggregate | null;

  @TypeGraphQL.Field((_type) => ReadingSumAggregate, {
    nullable: true,
  })
  _sum!: ReadingSumAggregate | null;

  @TypeGraphQL.Field((_type) => ReadingMinAggregate, {
    nullable: true,
  })
  _min!: ReadingMinAggregate | null;

  @TypeGraphQL.Field((_type) => ReadingMaxAggregate, {
    nullable: true,
  })
  _max!: ReadingMaxAggregate | null;
}
