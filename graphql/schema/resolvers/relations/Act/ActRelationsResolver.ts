import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql";
import { getPrismaFromContext } from "../../../helpers";
import { Act } from "../../../models/Act";
import { ActionScheduleTemplate } from "../../../models/ActionScheduleTemplate";
import { Categorization } from "../../../models/Categorization";
import { Habit } from "../../../models/Habit";
import { IdentityActRelation } from "../../../models/IdentityActRelation";
import { MetricApplication } from "../../../models/MetricApplication";
import { ActCategorizationsArgs } from "./args/ActCategorizationsArgs";
import { ActHabitsArgs } from "./args/ActHabitsArgs";
import { ActIdentityRelationsArgs } from "./args/ActIdentityRelationsArgs";
import { ActMetricApplicationsArgs } from "./args/ActMetricApplicationsArgs";
import { ActScheduleTemplatesArgs } from "./args/ActScheduleTemplatesArgs";
import { ActVariantsArgs } from "./args/ActVariantsArgs";

@TypeGraphQL.Resolver((_of) => Act)
export class ActRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Act, {
    nullable: true,
  })
  async parent(
    @TypeGraphQL.Root() act: Act,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Act | null> {
    return getPrismaFromContext(ctx)
      .act.findUnique({
        where: {
          id: act.id,
        },
      })
      .parent({});
  }

  @TypeGraphQL.FieldResolver((_type) => [Act], {
    nullable: false,
  })
  async variants(
    @TypeGraphQL.Root() act: Act,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: ActVariantsArgs
  ): Promise<Act[]> {
    return getPrismaFromContext(ctx)
      .act.findUnique({
        where: {
          id: act.id,
        },
      })
      .variants(args);
  }

  @TypeGraphQL.FieldResolver((_type) => [Habit], {
    nullable: false,
  })
  async habits(
    @TypeGraphQL.Root() act: Act,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: ActHabitsArgs
  ): Promise<Habit[]> {
    return getPrismaFromContext(ctx)
      .act.findUnique({
        where: {
          id: act.id,
        },
      })
      .habits(args);
  }

  @TypeGraphQL.FieldResolver((_type) => [MetricApplication], {
    nullable: false,
  })
  async metricApplications(
    @TypeGraphQL.Root() act: Act,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: ActMetricApplicationsArgs
  ): Promise<MetricApplication[]> {
    return getPrismaFromContext(ctx)
      .act.findUnique({
        where: {
          id: act.id,
        },
      })
      .metricApplications(args);
  }

  @TypeGraphQL.FieldResolver((_type) => [IdentityActRelation], {
    nullable: false,
  })
  async identityRelations(
    @TypeGraphQL.Root() act: Act,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: ActIdentityRelationsArgs
  ): Promise<IdentityActRelation[]> {
    return getPrismaFromContext(ctx)
      .act.findUnique({
        where: {
          id: act.id,
        },
      })
      .identityRelations(args);
  }

  @TypeGraphQL.FieldResolver((_type) => [ActionScheduleTemplate], {
    nullable: false,
  })
  async scheduleTemplates(
    @TypeGraphQL.Root() act: Act,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: ActScheduleTemplatesArgs
  ): Promise<ActionScheduleTemplate[]> {
    return getPrismaFromContext(ctx)
      .act.findUnique({
        where: {
          id: act.id,
        },
      })
      .scheduleTemplates(args);
  }

  @TypeGraphQL.FieldResolver((_type) => [Categorization], {
    nullable: false,
  })
  async categorizations(
    @TypeGraphQL.Root() act: Act,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: ActCategorizationsArgs
  ): Promise<Categorization[]> {
    throw new Error("Not implemented");
    // return ActCrudResolver.prototype.parent(ctx, info, args);
  }
}
