import { ApolloContext } from "@/graphql/context";
import { ScheduleTemplateCrudResolver } from "@/graphql/schema/resolvers/crud/ScheduleTemplate/ScheduleTemplateCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { ScheduleTemplate } from "../../../models/ScheduleTemplate";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyScheduleTemplateArgs } from "./args/DeleteManyScheduleTemplateArgs";

@TypeGraphQL.Resolver((_of) => ScheduleTemplate)
export class DeleteManyScheduleTemplateResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyScheduleTemplate(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyScheduleTemplateArgs
  ): Promise<AffectedRowsOutput> {
    return ScheduleTemplateCrudResolver.prototype.deleteManyScheduleTemplate(ctx, info, args);
  }
}
