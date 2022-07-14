import { ApolloContext } from "@/graphql/context";
import { ScheduleTemplateCrudResolver } from "@/graphql/schema/resolvers/crud/ScheduleTemplate/ScheduleTemplateCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { ScheduleTemplate } from "../../../models/ScheduleTemplate";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyScheduleTemplateArgs } from "./args/UpdateManyScheduleTemplateArgs";

@TypeGraphQL.Resolver((_of) => ScheduleTemplate)
export class UpdateManyScheduleTemplateResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyScheduleTemplateArgs
  ): Promise<AffectedRowsOutput> {
    return ScheduleTemplateCrudResolver.prototype.updateManyScheduleTemplate(ctx, info, args);
  }
}
