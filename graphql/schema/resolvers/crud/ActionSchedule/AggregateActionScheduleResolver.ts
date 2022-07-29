import { ApolloContext } from "@/graphql/context";
import { ActionScheduleCrudResolver } from "@/graphql/schema/resolvers/crud/ActionSchedule/ActionScheduleCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionSchedule } from "../../../models/ActionSchedule";
import { AggregateActionSchedule } from "../../outputs/AggregateActionSchedule";
import { AggregateActionScheduleArgs } from "./args/AggregateActionScheduleArgs";

@TypeGraphQL.Resolver((_of) => ActionSchedule)
export class AggregateActionScheduleResolver {
  @TypeGraphQL.Query((_returns) => AggregateActionSchedule, { nullable: false })
  async aggregateActionSchedule(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateActionScheduleArgs
  ): Promise<AggregateActionSchedule> {
    return ActionScheduleCrudResolver.prototype.aggregateActionSchedule(ctx, info, args);
  }
}
