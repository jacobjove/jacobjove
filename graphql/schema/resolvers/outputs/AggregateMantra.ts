import * as TypeGraphQL from "type-graphql-v2-fork";
import { MantraAvgAggregate } from "../outputs/MantraAvgAggregate";
import { MantraCountAggregate } from "../outputs/MantraCountAggregate";
import { MantraMaxAggregate } from "../outputs/MantraMaxAggregate";
import { MantraMinAggregate } from "../outputs/MantraMinAggregate";
import { MantraSumAggregate } from "../outputs/MantraSumAggregate";

@TypeGraphQL.ObjectType("AggregateMantra", {
  isAbstract: true,
})
export class AggregateMantra {
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
