import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplate } from "../models/ActionScheduleTemplate";
import { Categorization } from "../models/Categorization";
import { Habit } from "../models/Habit";
import { IdentityActRelation } from "../models/IdentityActRelation";
import { MetricApplication } from "../models/MetricApplication";
import { ActCount } from "../resolvers/outputs/ActCount";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Act", {
  isAbstract: true,
})
export class Act extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  slug!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description?: string | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  isPublic!: boolean;

  parent?: Act | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  parentId?: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;

  variants?: Act[];

  habits?: Habit[];

  metricApplications?: MetricApplication[];

  identityRelations?: IdentityActRelation[];

  scheduleTemplates?: ActionScheduleTemplate[];

  categorizations?: Categorization[];

  @TypeGraphQL.Field(() => ActCount, { nullable: true })
  _count?: ActCount | null;
}
