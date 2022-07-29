import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { CategoryAvgAggregate } from "../outputs/CategoryAvgAggregate";
import { CategoryCountAggregate } from "../outputs/CategoryCountAggregate";
import { CategoryMaxAggregate } from "../outputs/CategoryMaxAggregate";
import { CategoryMinAggregate } from "../outputs/CategoryMinAggregate";
import { CategorySumAggregate } from "../outputs/CategorySumAggregate";

@TypeGraphQL.ObjectType("CategoryGroupBy", {
  isAbstract: true,
})
export class CategoryGroupBy {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field((_type) => CategoryCountAggregate, { nullable: true })
  _count!: CategoryCountAggregate | null;

  @TypeGraphQL.Field((_type) => CategoryAvgAggregate, { nullable: true })
  _avg!: CategoryAvgAggregate | null;

  @TypeGraphQL.Field((_type) => CategorySumAggregate, { nullable: true })
  _sum!: CategorySumAggregate | null;

  @TypeGraphQL.Field((_type) => CategoryMinAggregate, { nullable: true })
  _min!: CategoryMinAggregate | null;

  @TypeGraphQL.Field((_type) => CategoryMaxAggregate, { nullable: true })
  _max!: CategoryMaxAggregate | null;
}
