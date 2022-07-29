import { ApolloContext } from "@/graphql/context";
import { ShelvingCrudResolver } from "@/graphql/schema/resolvers/crud/Shelving/ShelvingCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Shelving } from "../../../models/Shelving";
import { DeleteShelvingArgs } from "./args/DeleteShelvingArgs";

@TypeGraphQL.Resolver((_of) => Shelving)
export class DeleteShelvingResolver {
  @TypeGraphQL.Mutation((_returns) => Shelving, { nullable: true })
  async deleteShelving(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteShelvingArgs
  ): Promise<Shelving | null> {
    return ShelvingCrudResolver.prototype.deleteShelving(ctx, info, args);
  }
}
