import { ApolloContext } from "@/graphql/context";
import { ScheduleTemplateCrudResolver } from "@/graphql/schema/resolvers/crud/ScheduleTemplate/ScheduleTemplateCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { ScheduleTemplate } from "../../../models/ScheduleTemplate";
import { DeleteScheduleTemplateArgs } from "./args/DeleteScheduleTemplateArgs";

@TypeGraphQL.Resolver((_of) => ScheduleTemplate)
export class DeleteScheduleTemplateResolver {
  @TypeGraphQL.Mutation((_returns) => ScheduleTemplate, {
    nullable: true,
  })
  async deleteScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteScheduleTemplateArgs
  ): Promise<ScheduleTemplate | null> {
    return ScheduleTemplateCrudResolver.prototype.deleteScheduleTemplate(ctx, info, args);
  }
}
