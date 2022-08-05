import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { MantraAvgAggregate } from "../outputs/MantraAvgAggregate";
import { MantraCountAggregate } from "../outputs/MantraCountAggregate";
import { MantraMaxAggregate } from "../outputs/MantraMaxAggregate";
import { MantraMinAggregate } from "../outputs/MantraMinAggregate";
import { MantraSumAggregate } from "../outputs/MantraSumAggregate";

@TypeGraphQL.ObjectType("MantraGroupBy", { isAbstract: true })
export class MantraGroupBy {
  @TypeGraphQL.Field(() => String, { nullable: false })
  _id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  content!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => MantraCountAggregate, { nullable: true })
  _count!: MantraCountAggregate | null;

  @TypeGraphQL.Field(() => MantraAvgAggregate, { nullable: true })
  _avg!: MantraAvgAggregate | null;

  @TypeGraphQL.Field(() => MantraSumAggregate, { nullable: true })
  _sum!: MantraSumAggregate | null;

  @TypeGraphQL.Field(() => MantraMinAggregate, { nullable: true })
  _min!: MantraMinAggregate | null;

  @TypeGraphQL.Field(() => MantraMaxAggregate, { nullable: true })
  _max!: MantraMaxAggregate | null;
}
