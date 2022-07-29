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
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  habitId!: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  start!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  end!: Date;

  @TypeGraphQL.Field(() => String, { nullable: true })
  notes!: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => ActionCountAggregate, { nullable: true })
  _count!: ActionCountAggregate | null;

  @TypeGraphQL.Field(() => ActionAvgAggregate, { nullable: true })
  _avg!: ActionAvgAggregate | null;

  @TypeGraphQL.Field(() => ActionSumAggregate, { nullable: true })
  _sum!: ActionSumAggregate | null;

  @TypeGraphQL.Field(() => ActionMinAggregate, { nullable: true })
  _min!: ActionMinAggregate | null;

  @TypeGraphQL.Field(() => ActionMaxAggregate, { nullable: true })
  _max!: ActionMaxAggregate | null;
}
