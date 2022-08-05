import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { CategorizationAvgAggregate } from "../outputs/CategorizationAvgAggregate";
import { CategorizationCountAggregate } from "../outputs/CategorizationCountAggregate";
import { CategorizationMaxAggregate } from "../outputs/CategorizationMaxAggregate";
import { CategorizationMinAggregate } from "../outputs/CategorizationMinAggregate";
import { CategorizationSumAggregate } from "../outputs/CategorizationSumAggregate";

@TypeGraphQL.ObjectType("CategorizationGroupBy", { isAbstract: true })
export class CategorizationGroupBy {
  @TypeGraphQL.Field(() => String, { nullable: false })
  _id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  categoryId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  actId!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => CategorizationCountAggregate, { nullable: true })
  _count!: CategorizationCountAggregate | null;

  @TypeGraphQL.Field(() => CategorizationAvgAggregate, { nullable: true })
  _avg!: CategorizationAvgAggregate | null;

  @TypeGraphQL.Field(() => CategorizationSumAggregate, { nullable: true })
  _sum!: CategorizationSumAggregate | null;

  @TypeGraphQL.Field(() => CategorizationMinAggregate, { nullable: true })
  _min!: CategorizationMinAggregate | null;

  @TypeGraphQL.Field(() => CategorizationMaxAggregate, { nullable: true })
  _max!: CategorizationMaxAggregate | null;
}
