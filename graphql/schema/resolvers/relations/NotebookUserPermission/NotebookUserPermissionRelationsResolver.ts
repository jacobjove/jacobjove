import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql";
import { getPrismaFromContext } from "../../../helpers";
import { Notebook } from "../../../models/Notebook";
import { NotebookUserPermission } from "../../../models/NotebookUserPermission";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver((_of) => NotebookUserPermission)
export class NotebookUserPermissionRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => User, {
    nullable: false,
  })
  async user(
    @TypeGraphQL.Root() notebookUserPermission: NotebookUserPermission,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<User> {
    throw new Error("Not implemented");
    return getPrismaFromContext(ctx)
      .notebookUserPermission.findUnique({
        where: {
          id: notebookUserPermission.id,
        },
      })
      .user({});
  }

  @TypeGraphQL.FieldResolver((_type) => Notebook, {
    nullable: false,
  })
  async notebook(
    @TypeGraphQL.Root() notebookUserPermission: NotebookUserPermission,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Notebook> {
    throw new Error("Not implemented");
  }
}
