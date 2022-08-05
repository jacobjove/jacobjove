import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../../graphql/schema/scalars";
import { Habit } from "./Habit";
import { MetricRecord } from "./MetricRecord";

@TypeGraphQL.ObjectType("Action", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class Action extends Model {
  habit?: Habit | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  habitId?: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  @Property({ required: true })
  start!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  @Property({ required: true })
  end!: Date;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  notes?: string | null;

  metricRecords?: MetricRecord[];

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}

const ActionModel = getModelForClass<typeof Action>(Action);
export default ActionModel;
