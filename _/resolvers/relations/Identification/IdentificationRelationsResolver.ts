import { GqlContext } from "@/graphql/context";
import { Identity } from "@/graphql/schema/generated/models";
import { User } from "@/graphql/schema/generated/models/user.model";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver((_of) => Identity)
export class IdentityRelationsResolver {
  @TypeGraphQL.FieldResolver(() => User, { nullable: false })
  async user(
    @TypeGraphQL.Root() identity: Identity,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<User> {
    throw new Error("Not implemented");
  }
}
