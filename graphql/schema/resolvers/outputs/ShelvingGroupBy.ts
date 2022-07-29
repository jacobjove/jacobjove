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
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  bookId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  shelfId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  position!: number;

  @TypeGraphQL.Field(() => String, { nullable: true })
  rationale!: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => ShelvingCountAggregate, { nullable: true })
  _count!: ShelvingCountAggregate | null;

  @TypeGraphQL.Field(() => ShelvingAvgAggregate, { nullable: true })
  _avg!: ShelvingAvgAggregate | null;

  @TypeGraphQL.Field(() => ShelvingSumAggregate, { nullable: true })
  _sum!: ShelvingSumAggregate | null;

  @TypeGraphQL.Field(() => ShelvingMinAggregate, { nullable: true })
  _min!: ShelvingMinAggregate | null;

  @TypeGraphQL.Field(() => ShelvingMaxAggregate, { nullable: true })
  _max!: ShelvingMaxAggregate | null;
}
