import { ApolloContext } from "@/graphql/context";
import { ActionScheduleTemplateCrudResolver } from "@/graphql/schema/resolvers/crud/ActionScheduleTemplate/ActionScheduleTemplateCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplate } from "../../../models/ActionScheduleTemplate";
import { UpsertActionScheduleTemplateArgs } from "./args/UpsertActionScheduleTemplateArgs";

@TypeGraphQL.Resolver((_of) => ActionScheduleTemplate)
export class UpsertActionScheduleTemplateResolver {
  @TypeGraphQL.Mutation((_returns) => ActionScheduleTemplate, { nullable: false })
  async upsertActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate> {
    return ActionScheduleTemplateCrudResolver.prototype.upsertActionScheduleTemplate(
      ctx,
      info,
      args
    );
  }
}
