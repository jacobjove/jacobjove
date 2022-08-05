import { GqlContext } from "@/graphql/context";
import { NotebookUserPermission } from "@/graphql/schema/generated/models";
import { Notebook } from "@/graphql/schema/generated/models/notebook.model";
import { User } from "@/graphql/schema/generated/models/user.model";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver((_of) => NotebookUserPermission)
export class NotebookUserPermissionRelationsResolver {
  @TypeGraphQL.FieldResolver(() => User, { nullable: false })
  async user(
    @TypeGraphQL.Root() notebookUserPermission: NotebookUserPermission,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<User> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => Notebook, { nullable: false })
  async notebook(
    @TypeGraphQL.Root() notebookUserPermission: NotebookUserPermission,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Notebook> {
    throw new Error("Not implemented");
  }
}
