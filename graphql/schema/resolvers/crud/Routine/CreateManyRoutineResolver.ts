import { ApolloContext } from "@/graphql/context";
import { RoutineCrudResolver } from "@/graphql/schema/resolvers/crud/Routine/RoutineCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Routine } from "../../../models/Routine";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyRoutineArgs } from "./args/CreateManyRoutineArgs";

@TypeGraphQL.Resolver((_of) => Routine)
export class CreateManyRoutineResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyRoutineArgs
  ): Promise<AffectedRowsOutput> {
    return RoutineCrudResolver.prototype.createManyRoutine(ctx, info, args);
  }
}
