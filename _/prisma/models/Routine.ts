import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar, ObjectIdScalar } from "../../../graphql/schema/scalars";
import { RoutineHabit } from "./RoutineHabit";

@TypeGraphQL.ObjectType("Routine", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class Routine extends Model {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  @Property({ required: true })
  userId!: ObjectId;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  name!: string;

  habits?: RoutineHabit[];

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  @Property({ required: false })
  durationInMinutes?: number | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  notes?: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}

const RoutineModel = getModelForClass<typeof Routine>(Routine);
export default RoutineModel;
