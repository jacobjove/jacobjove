import * as TypeGraphQL from "type-graphql";
import { RedirectAvgAggregate } from "../outputs/RedirectAvgAggregate";
import { RedirectCountAggregate } from "../outputs/RedirectCountAggregate";
import { RedirectMaxAggregate } from "../outputs/RedirectMaxAggregate";
import { RedirectMinAggregate } from "../outputs/RedirectMinAggregate";
import { RedirectSumAggregate } from "../outputs/RedirectSumAggregate";

@TypeGraphQL.ObjectType("RedirectGroupBy", {
  isAbstract: true,
})
export class RedirectGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  old_path!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  new_path!: string;

  @TypeGraphQL.Field((_type) => RedirectCountAggregate, {
    nullable: true,
  })
  _count!: RedirectCountAggregate | null;

  @TypeGraphQL.Field((_type) => RedirectAvgAggregate, {
    nullable: true,
  })
  _avg!: RedirectAvgAggregate | null;

  @TypeGraphQL.Field((_type) => RedirectSumAggregate, {
    nullable: true,
  })
  _sum!: RedirectSumAggregate | null;

  @TypeGraphQL.Field((_type) => RedirectMinAggregate, {
    nullable: true,
  })
  _min!: RedirectMinAggregate | null;

  @TypeGraphQL.Field((_type) => RedirectMaxAggregate, {
    nullable: true,
  })
  _max!: RedirectMaxAggregate | null;
}
