import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Note } from "@/graphql/schema/generated/models/note.model";
import { Notebook } from "@/graphql/schema/generated/models/notebook.model";
import { NotebookUserPermission } from "@/graphql/schema/generated/models";
import { User } from "@/graphql/schema/generated/models/user.model";
import { NotebookNotesArgs } from "./args/NotebookNotesArgs";
import { NotebookUserPermissionsArgs } from "./args/NotebookUserPermissionsArgs";

@TypeGraphQL.Resolver((_of) => Notebook)
export class NotebookRelationsResolver {
  @TypeGraphQL.FieldResolver(() => User, { nullable: false })
  async owner(
    @TypeGraphQL.Root() notebook: Notebook,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<User> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [Note], { nullable: false })
  async notes(
    @TypeGraphQL.Root() notebook: Notebook,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: NotebookNotesArgs
  ): Promise<Note[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [NotebookUserPermission], { nullable: false })
  async userPermissions(
    @TypeGraphQL.Root() notebook: Notebook,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: NotebookUserPermissionsArgs
  ): Promise<NotebookUserPermission[]> {
    throw new Error("Not implemented");
  }
}
