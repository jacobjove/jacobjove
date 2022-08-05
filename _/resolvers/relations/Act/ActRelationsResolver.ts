import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Act } from "@/graphql/schema/generated/models/act.model";
import { ActionScheduleTemplate } from "@/graphql/schema/generated/models/actionScheduleTemplate.model";
import { Categorization } from "@/graphql/schema/generated/models";
import { Habit } from "@/graphql/schema/generated/models/habit.model";
import { IdentityActRelation } from "@/graphql/schema/generated/models";
import { MetricApplication } from "@/graphql/schema/generated/models";
import { ActCategorizationsArgs } from "./args/ActCategorizationsArgs";
import { ActHabitsArgs } from "./args/ActHabitsArgs";
import { ActIdentityRelationsArgs } from "./args/ActIdentityRelationsArgs";
import { ActMetricApplicationsArgs } from "./args/ActMetricApplicationsArgs";
import { ActScheduleTemplatesArgs } from "./args/ActScheduleTemplatesArgs";
import { ActVariantsArgs } from "./args/ActVariantsArgs";

@TypeGraphQL.Resolver((_of) => Act)
export class ActRelationsResolver {
  @TypeGraphQL.FieldResolver(() => Act, { nullable: true })
  async parent(
    @TypeGraphQL.Root() act: Act,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Act | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [Act], { nullable: false })
  async variants(
    @TypeGraphQL.Root() act: Act,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: ActVariantsArgs
  ): Promise<Act[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [Habit], { nullable: false })
  async habits(
    @TypeGraphQL.Root() act: Act,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: ActHabitsArgs
  ): Promise<Habit[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [MetricApplication], { nullable: false })
  async metricApplications(
    @TypeGraphQL.Root() act: Act,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: ActMetricApplicationsArgs
  ): Promise<MetricApplication[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [IdentityActRelation], { nullable: false })
  async identityRelations(
    @TypeGraphQL.Root() act: Act,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: ActIdentityRelationsArgs
  ): Promise<IdentityActRelation[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [ActionScheduleTemplate], { nullable: false })
  async scheduleTemplates(
    @TypeGraphQL.Root() act: Act,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: ActScheduleTemplatesArgs
  ): Promise<ActionScheduleTemplate[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [Categorization], { nullable: false })
  async categorizations(
    @TypeGraphQL.Root() act: Act,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: ActCategorizationsArgs
  ): Promise<Categorization[]> {
    throw new Error("Not implemented");
  }
}
