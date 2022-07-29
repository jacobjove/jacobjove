import { ApolloContext } from "@/graphql/context";
import { ActionScheduleTemplateCrudResolver } from "@/graphql/schema/resolvers/crud/ActionScheduleTemplate/ActionScheduleTemplateCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplate } from "../../../models/ActionScheduleTemplate";
import { DeleteActionScheduleTemplateArgs } from "./args/DeleteActionScheduleTemplateArgs";

@TypeGraphQL.Resolver((_of) => ActionScheduleTemplate)
export class DeleteActionScheduleTemplateResolver {
  @TypeGraphQL.Mutation((_returns) => ActionScheduleTemplate, { nullable: true })
  async deleteActionScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteActionScheduleTemplateArgs
  ): Promise<ActionScheduleTemplate | null> {
    return ActionScheduleTemplateCrudResolver.prototype.deleteActionScheduleTemplate(
      ctx,
      info,
      args
    );
  }
}
