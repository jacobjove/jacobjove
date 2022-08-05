import { GqlContext } from "@/graphql/context";
import { ActionScheduleTemplate } from "@/graphql/schema/generated/models/actionScheduleTemplate.model";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
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
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => ActionScheduleTemplate, { nullable: true })
  async findFirstActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [ActionScheduleTemplate], { nullable: false })
  async actionScheduleTemplates(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => ActionScheduleTemplate, { nullable: false })
  async createActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyActionScheduleTemplateArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => ActionScheduleTemplate, { nullable: true })
  async deleteActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => ActionScheduleTemplate, { nullable: true })
  async updateActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyActionScheduleTemplateArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyActionScheduleTemplateArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => ActionScheduleTemplate, { nullable: false })
  async upsertActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateActionScheduleTemplate, { nullable: false })
  async aggregateActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateActionScheduleTemplateArgs
  ): Promise<AggregateActionScheduleTemplate> {
    throw new Error("Not implemented");
  }
}
