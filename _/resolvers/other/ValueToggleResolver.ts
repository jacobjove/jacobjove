import { GqlContext } from "@/graphql/context";
import { Value } from "@/graphql/schema/generated/models/value.model";
import { toggleSelection } from "@/graphql/schema/helpers";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver((_of) => Value)
export class ValueToggleResolver {
  @TypeGraphQL.Mutation((_returns) => Value, { nullable: false })
  async toggleValue(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("valueId", () => String) valueId: string,
    @TypeGraphQL.Arg("archivedAt", { nullable: true }) archivedAt: null | Date
  ): Promise<Value> {
    return toggleSelection("values", ctx, info, valueId, archivedAt) as Promise<Value>;
  }
}
