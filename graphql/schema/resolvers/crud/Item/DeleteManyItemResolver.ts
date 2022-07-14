import { ApolloContext } from "@/graphql/context";
import { ItemCrudResolver } from "@/graphql/schema/resolvers/crud/Item/ItemCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Item } from "../../../models/Item";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyItemArgs } from "./args/DeleteManyItemArgs";

@TypeGraphQL.Resolver((_of) => Item)
export class DeleteManyItemResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyItem(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyItemArgs
  ): Promise<AffectedRowsOutput> {
    return ItemCrudResolver.prototype.deleteManyItem(ctx, info, args);
  }
}
