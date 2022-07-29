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
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => CategoryCountAggregate, { nullable: true })
  _count!: CategoryCountAggregate | null;

  @TypeGraphQL.Field(() => CategoryAvgAggregate, { nullable: true })
  _avg!: CategoryAvgAggregate | null;

  @TypeGraphQL.Field(() => CategorySumAggregate, { nullable: true })
  _sum!: CategorySumAggregate | null;

  @TypeGraphQL.Field(() => CategoryMinAggregate, { nullable: true })
  _min!: CategoryMinAggregate | null;

  @TypeGraphQL.Field(() => CategoryMaxAggregate, { nullable: true })
  _max!: CategoryMaxAggregate | null;
}
