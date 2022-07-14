import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { ScheduleTemplate } from "../../../models/ScheduleTemplate";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateScheduleTemplate } from "../../outputs/AggregateScheduleTemplate";
import { ScheduleTemplateGroupBy } from "../../outputs/ScheduleTemplateGroupBy";
import { AggregateScheduleTemplateArgs } from "./args/AggregateScheduleTemplateArgs";
import { CreateManyScheduleTemplateArgs } from "./args/CreateManyScheduleTemplateArgs";
import { CreateScheduleTemplateArgs } from "./args/CreateScheduleTemplateArgs";
import { DeleteManyScheduleTemplateArgs } from "./args/DeleteManyScheduleTemplateArgs";
import { DeleteScheduleTemplateArgs } from "./args/DeleteScheduleTemplateArgs";
import { FindFirstScheduleTemplateArgs } from "./args/FindFirstScheduleTemplateArgs";
import { FindManyScheduleTemplateArgs } from "./args/FindManyScheduleTemplateArgs";
import { FindUniqueScheduleTemplateArgs } from "./args/FindUniqueScheduleTemplateArgs";
import { GroupByScheduleTemplateArgs } from "./args/GroupByScheduleTemplateArgs";
import { UpdateManyScheduleTemplateArgs } from "./args/UpdateManyScheduleTemplateArgs";
import { UpdateScheduleTemplateArgs } from "./args/UpdateScheduleTemplateArgs";
import { UpsertScheduleTemplateArgs } from "./args/UpsertScheduleTemplateArgs";

@TypeGraphQL.Resolver((_of) => ScheduleTemplate)
export class ScheduleTemplateCrudResolver {
  @TypeGraphQL.Query((_returns) => ScheduleTemplate, {
    nullable: true,
  })
  async scheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueScheduleTemplateArgs
  ): Promise<ScheduleTemplate | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).scheduleTemplate.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => ScheduleTemplate, {
    nullable: true,
  })
  async findFirstScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstScheduleTemplateArgs
  ): Promise<ScheduleTemplate | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).scheduleTemplate.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [ScheduleTemplate], {
    nullable: false,
  })
  async scheduleTemplates(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyScheduleTemplateArgs
  ): Promise<ScheduleTemplate[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).scheduleTemplate.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => ScheduleTemplate, {
    nullable: false,
  })
  async createScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateScheduleTemplateArgs
  ): Promise<ScheduleTemplate> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).scheduleTemplate.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyScheduleTemplateArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).scheduleTemplate.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => ScheduleTemplate, {
    nullable: true,
  })
  async deleteScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteScheduleTemplateArgs
  ): Promise<ScheduleTemplate | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).scheduleTemplate.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => ScheduleTemplate, {
    nullable: true,
  })
  async updateScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateScheduleTemplateArgs
  ): Promise<ScheduleTemplate | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).scheduleTemplate.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyScheduleTemplateArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).scheduleTemplate.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyScheduleTemplateArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).scheduleTemplate.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => ScheduleTemplate, {
    nullable: false,
  })
  async upsertScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertScheduleTemplateArgs
  ): Promise<ScheduleTemplate> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).scheduleTemplate.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateScheduleTemplate, {
    nullable: false,
  })
  async aggregateScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateScheduleTemplateArgs
  ): Promise<AggregateScheduleTemplate> {
    return getPrismaFromContext(ctx).scheduleTemplate.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [ScheduleTemplateGroupBy], {
    nullable: false,
  })
  async groupByScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByScheduleTemplateArgs
  ): Promise<ScheduleTemplateGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).scheduleTemplate.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
