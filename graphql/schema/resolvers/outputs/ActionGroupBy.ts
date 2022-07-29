import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { ActionAvgAggregate } from "../outputs/ActionAvgAggregate";
import { ActionCountAggregate } from "../outputs/ActionCountAggregate";
import { ActionMaxAggregate } from "../outputs/ActionMaxAggregate";
import { ActionMinAggregate } from "../outputs/ActionMinAggregate";
import { ActionSumAggregate } from "../outputs/ActionSumAggregate";

@TypeGraphQL.ObjectType("ActionGroupBy", {
  isAbstract: true,
})
export class ActionGroupBy {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  habitId!: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  start!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  end!: Date;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  notes!: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field((_type) => ActionCountAggregate, { nullable: true })
  _count!: ActionCountAggregate | null;

  @TypeGraphQL.Field((_type) => ActionAvgAggregate, { nullable: true })
  _avg!: ActionAvgAggregate | null;

  @TypeGraphQL.Field((_type) => ActionSumAggregate, { nullable: true })
  _sum!: ActionSumAggregate | null;

  @TypeGraphQL.Field((_type) => ActionMinAggregate, { nullable: true })
  _min!: ActionMinAggregate | null;

  @TypeGraphQL.Field((_type) => ActionMaxAggregate, { nullable: true })
  _max!: ActionMaxAggregate | null;
}
