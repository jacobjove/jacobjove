import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { ActionScheduleTemplate } from "../../../models/ActionScheduleTemplate";
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
import { UpdateActionScheduleTemplateArgs } from "./args/UpdateActionScheduleTemplateArgs";
import { UpdateManyActionScheduleTemplateArgs } from "./args/UpdateManyActionScheduleTemplateArgs";
import { UpsertActionScheduleTemplateArgs } from "./args/UpsertActionScheduleTemplateArgs";

@TypeGraphQL.Resolver((_of) => ActionScheduleTemplate)
export class ActionScheduleTemplateCrudResolver {
  @TypeGraphQL.Query((_returns) => ActionScheduleTemplate, { nullable: true })
  async actionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate | null> {
    return getPrismaFromContext(ctx).actionScheduleTemplate.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => ActionScheduleTemplate, { nullable: true })
  async findFirstActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate | null> {
    return getPrismaFromContext(ctx).actionScheduleTemplate.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [ActionScheduleTemplate], { nullable: false })
  async actionScheduleTemplates(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate[]> {
    return getPrismaFromContext(ctx).actionScheduleTemplate.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => ActionScheduleTemplate, { nullable: false })
  async createActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate> {
    return getPrismaFromContext(ctx).actionScheduleTemplate.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyActionScheduleTemplateArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).actionScheduleTemplate.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => ActionScheduleTemplate, { nullable: true })
  async deleteActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate | null> {
    return getPrismaFromContext(ctx).actionScheduleTemplate.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => ActionScheduleTemplate, { nullable: true })
  async updateActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate | null> {
    return getPrismaFromContext(ctx).actionScheduleTemplate.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyActionScheduleTemplateArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).actionScheduleTemplate.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyActionScheduleTemplateArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).actionScheduleTemplate.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => ActionScheduleTemplate, { nullable: false })
  async upsertActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate> {
    return getPrismaFromContext(ctx).actionScheduleTemplate.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateActionScheduleTemplate, { nullable: false })
  async aggregateActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateActionScheduleTemplateArgs
  ): Promise<AggregateActionScheduleTemplate> {
    return getPrismaFromContext(ctx).actionScheduleTemplate.aggregate({
      ...args,
    });
  }
}
