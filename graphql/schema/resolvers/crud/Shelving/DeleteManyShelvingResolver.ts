import { ApolloContext } from "@/graphql/context";
import { ShelvingCrudResolver } from "@/graphql/schema/resolvers/crud/Shelving/ShelvingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Shelving } from "../../../models/Shelving";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyShelvingArgs } from "./args/DeleteManyShelvingArgs";

@TypeGraphQL.Resolver((_of) => Shelving)
export class DeleteManyShelvingResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyShelving(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyShelvingArgs
  ): Promise<AffectedRowsOutput> {
    return ShelvingCrudResolver.prototype.deleteManyShelving(ctx, info, args);
  }
}
