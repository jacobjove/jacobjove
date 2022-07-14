import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { ActionScheduleTemplate } from "../../../models/ActionScheduleTemplate";
import { ActionScheduleTemplateGroupBy } from "../../outputs/ActionScheduleTemplateGroupBy";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateActionScheduleTemplate } from "../../outputs/AggregateActionScheduleTemplate";
import { AggregateActionScheduleTemplateArgs } from "./args/AggregateActionScheduleTemplateArgs";
import { CreateActionScheduleTemplateArgs } from "./args/CreateActionScheduleTemplateArgs";
import { CreateManyActionScheduleTemplateArgs } from "./args/CreateManyActionScheduleTemplateArgs";
import { DeleteActionScheduleTemplateArgs } from "./args/DeleteActionScheduleTemplateArgs";
import { DeleteManyActionScheduleTemplateArgs } from "./args/DeleteManyActionScheduleTemplateArgs";
import { FindFirstActionScheduleTemplateArgs } from "./args/FindFirstActionScheduleTemplateArgs";
import { FindManyActionScheduleTemplateArgs } from "./args/FindManyActionScheduleTemplateArgs";
import { FindUniqueActionScheduleTemplateArgs } from "./args/FindUniqueActionScheduleTemplateArgs";
import { GroupByActionScheduleTemplateArgs } from "./args/GroupByActionScheduleTemplateArgs";
import { UpdateActionScheduleTemplateArgs } from "./args/UpdateActionScheduleTemplateArgs";
import { UpdateManyActionScheduleTemplateArgs } from "./args/UpdateManyActionScheduleTemplateArgs";
import { UpsertActionScheduleTemplateArgs } from "./args/UpsertActionScheduleTemplateArgs";

@TypeGraphQL.Resolver((_of) => ActionScheduleTemplate)
export class ActionScheduleTemplateCrudResolver {
  @TypeGraphQL.Query((_returns) => ActionScheduleTemplate, {
    nullable: true,
  })
  async actionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).actionScheduleTemplate.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => ActionScheduleTemplate, {
    nullable: true,
  })
  async findFirstActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).actionScheduleTemplate.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [ActionScheduleTemplate], {
    nullable: false,
  })
  async actionScheduleTemplates(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).actionScheduleTemplate.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => ActionScheduleTemplate, {
    nullable: false,
  })
  async createActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).actionScheduleTemplate.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyActionScheduleTemplateArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).actionScheduleTemplate.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => ActionScheduleTemplate, {
    nullable: true,
  })
  async deleteActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).actionScheduleTemplate.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => ActionScheduleTemplate, {
    nullable: true,
  })
  async updateActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).actionScheduleTemplate.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyActionScheduleTemplateArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).actionScheduleTemplate.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyActionScheduleTemplateArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).actionScheduleTemplate.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => ActionScheduleTemplate, {
    nullable: false,
  })
  async upsertActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).actionScheduleTemplate.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateActionScheduleTemplate, {
    nullable: false,
  })
  async aggregateActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateActionScheduleTemplateArgs
  ): Promise<AggregateActionScheduleTemplate> {
    return getPrismaFromContext(ctx).actionScheduleTemplate.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [ActionScheduleTemplateGroupBy], {
    nullable: false,
  })
  async groupByActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplateGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).actionScheduleTemplate.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
