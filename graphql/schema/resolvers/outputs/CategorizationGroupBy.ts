import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { CategorizationAvgAggregate } from "../outputs/CategorizationAvgAggregate";
import { CategorizationCountAggregate } from "../outputs/CategorizationCountAggregate";
import { CategorizationMaxAggregate } from "../outputs/CategorizationMaxAggregate";
import { CategorizationMinAggregate } from "../outputs/CategorizationMinAggregate";
import { CategorizationSumAggregate } from "../outputs/CategorizationSumAggregate";

@TypeGraphQL.ObjectType("CategorizationGroupBy", {
  isAbstract: true,
})
export class CategorizationGroupBy {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  categoryId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  actId!: string;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field((_type) => CategorizationCountAggregate, { nullable: true })
  _count!: CategorizationCountAggregate | null;

  @TypeGraphQL.Field((_type) => CategorizationAvgAggregate, { nullable: true })
  _avg!: CategorizationAvgAggregate | null;

  @TypeGraphQL.Field((_type) => CategorizationSumAggregate, { nullable: true })
  _sum!: CategorizationSumAggregate | null;

  @TypeGraphQL.Field((_type) => CategorizationMinAggregate, { nullable: true })
  _min!: CategorizationMinAggregate | null;

  @TypeGraphQL.Field((_type) => CategorizationMaxAggregate, { nullable: true })
  _max!: CategorizationMaxAggregate | null;
}
