import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ShelvingAvgAggregate } from "../outputs/ShelvingAvgAggregate";
import { ShelvingCountAggregate } from "../outputs/ShelvingCountAggregate";
import { ShelvingMaxAggregate } from "../outputs/ShelvingMaxAggregate";
import { ShelvingMinAggregate } from "../outputs/ShelvingMinAggregate";
import { ShelvingSumAggregate } from "../outputs/ShelvingSumAggregate";

@TypeGraphQL.ObjectType("ShelvingGroupBy", {
  isAbstract: true,
})
export class ShelvingGroupBy {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  bookId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  shelfId!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  position!: number;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  rationale!: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field((_type) => ShelvingCountAggregate, { nullable: true })
  _count!: ShelvingCountAggregate | null;

  @TypeGraphQL.Field((_type) => ShelvingAvgAggregate, { nullable: true })
  _avg!: ShelvingAvgAggregate | null;

  @TypeGraphQL.Field((_type) => ShelvingSumAggregate, { nullable: true })
  _sum!: ShelvingSumAggregate | null;

  @TypeGraphQL.Field((_type) => ShelvingMinAggregate, { nullable: true })
  _min!: ShelvingMinAggregate | null;

  @TypeGraphQL.Field((_type) => ShelvingMaxAggregate, { nullable: true })
  _max!: ShelvingMaxAggregate | null;
}
