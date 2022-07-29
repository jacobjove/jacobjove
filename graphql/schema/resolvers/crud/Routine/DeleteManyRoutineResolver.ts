import { ApolloContext } from "@/graphql/context";
import { RoutineCrudResolver } from "@/graphql/schema/resolvers/crud/Routine/RoutineCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Routine } from "../../../models/Routine";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyRoutineArgs } from "./args/DeleteManyRoutineArgs";

@TypeGraphQL.Resolver((_of) => Routine)
export class DeleteManyRoutineResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyRoutineArgs
  ): Promise<AffectedRowsOutput> {
    return RoutineCrudResolver.prototype.deleteManyRoutine(ctx, info, args);
  }
}
